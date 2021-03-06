import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

export enum LoadingBarEventType {
  PROGRESS,
  HEIGHT,
  COLOR,
  VISIBLE,
}
export class LoadingBarEvent {
  constructor(public type: LoadingBarEventType, public value: any) {}
}

export function isPresent(obj: any) {
  return obj !== undefined && obj !== null;
}

@Injectable({
  providedIn: 'root'
})
export class LoadingBarService {

  private _progress: number = 0;
    private _visible: boolean = true;
    private _intervalCounterId: any = 0;
    interval = 60; // in milliseconds

    private eventSource: Subject<LoadingBarEvent> = new Subject<LoadingBarEvent>();
    events: Observable<LoadingBarEvent> = this.eventSource.asObservable();

    set progress(value: number) {
        if (isPresent(value)) {
            if (value > 0) {
                this.visible = true;
            }
            this._progress = value;
            this._emitEvent(
                new LoadingBarEvent(LoadingBarEventType.PROGRESS, this._progress),
            );
        }
    }

    get progress(): number {
        return this._progress;
    }

    set visible(value: boolean) {
        if (isPresent(value)) {
            this._visible = value;
            this._emitEvent(new LoadingBarEvent(LoadingBarEventType.VISIBLE, this._visible));
        }
    }

    get visible(): boolean {
        return this._visible;
    }

    start() {
        this.stop();
        this.visible = true;

        this._intervalCounterId = setInterval(() => {
            // Increment the progress and update view component
            this.progress++;
        }, this.interval);
    }

    stop() {
        if (this._intervalCounterId) {
            clearInterval(this._intervalCounterId);
            this._intervalCounterId = null;
        }
    }

    reset() {
        this.stop();
        this.progress = 0;
    }

    complete() {
        this.progress = 100;
        this.stop();
        setTimeout(() => {
            this.visible = false;
            this.progress = 0;
        }, 250);
    }

    private _emitEvent(event: LoadingBarEvent) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    }
}
