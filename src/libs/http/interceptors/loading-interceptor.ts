import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {LoadingBarService} from '../../loading-bar/service/loading-bar.service';

interface Progress {
    started?: boolean;
    completed?: boolean;
    pendingRequests: number;
}

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    private _pending = new Subject<Progress>();
    private _pendingRequests = 0;

    constructor(private _loadingBarService: LoadingBarService) {
        this._pending.subscribe((progress: Progress) => {
            if (progress.started) {
                this._loadingBarService.start();
            }
            if (progress.completed) {
                this._loadingBarService.complete();
            }
        });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const showLoadingBar = Boolean(req.headers.get('IgnoreLoadingBar')) === false;
        if (showLoadingBar) {
            this._requestStarted();
        }

        const reqCopy = req.clone({
            headers: req.headers.delete('IgnoreLoadingBar'),
        });

        return next.handle(reqCopy).pipe(
            finalize(() => {
                if (showLoadingBar) {
                    this._requestEnded();
                }
            }),
        );
    }

    private _requestStarted() {
        this._pending.next({
            started: this._pendingRequests === 0,
            pendingRequests: ++this._pendingRequests,
        });
    }

    private _requestEnded() {
        this._pending.next({
            completed: this._pendingRequests === 1,
            pendingRequests: --this._pendingRequests,
        });
    }
}
