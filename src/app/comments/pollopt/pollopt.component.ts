import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {HackerNewsAPIService} from '../../hacker-news-api.service';

@Component({
  selector: '[app-pollopt]',
  templateUrl: './pollopt.component.html',
  styleUrls: ['./pollopt.component.css']
})
export class PolloptComponent implements OnInit, OnDestroy {

  @Input()
  id;

  sub;
  item: any = {};

  constructor(private api: HackerNewsAPIService) {
  }

  ngOnInit() {
    this.sub = this.api.getItem(this.id).subscribe(data => {
      this.item = data;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
