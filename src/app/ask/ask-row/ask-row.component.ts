import {Component, Input, OnInit} from '@angular/core';
import {HackerNewsAPIService} from '../../hacker-news-api.service';

@Component({
  selector: 'app-ask-row',
  templateUrl: './ask-row.component.html',
  styleUrls: ['./ask-row.component.css']
})
export class AskRowComponent implements OnInit {

  title: string;
  @Input()
  id: string;

  @Input()
  index: number;

  new: object;
  api: HackerNewsAPIService;

  constructor(api: HackerNewsAPIService) {
    this.title = 'discuss';
    this.api = api;
  }

  ngOnInit() {
    this.new = {};
    this.api.getItem(this.id).subscribe(r => {
      this.new = r;
    });
  }

}
