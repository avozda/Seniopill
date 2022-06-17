import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit} from '@angular/core';
import {
    LoadingBarEventType,
    LoadingBarService,
    isPresent,
} from '../service/loading-bar.service';
@Component({
  selector: 'app-loading-bar',
  template: ``,
  host: {
    '[style.backgroundColor]': 'color',
    '[style.color]': 'color',
    '[style.height]': 'height',
    '[style.width]': '0',
  },
  styleUrls: ['./loading-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingBarComponent implements OnInit {

  @Input() color = '#222b45';
  @Input() height = '2px';

  constructor(private _loadingBarService: LoadingBarService, private _elmRef: ElementRef) {}

  ngOnInit() {
      this._loadingBarService.events.subscribe((event) => {
          if (event.type === LoadingBarEventType.PROGRESS && isPresent(event.value)) {
              this._elmRef.nativeElement.style.width = event.value + '%';
          }
          this._elmRef.nativeElement.visible =
              event.type === LoadingBarEventType.VISIBLE ? event.value : false;
      });
  }

}
