import {Component, Input, OnInit} from '@angular/core';
import {HackerNewsAPIService} from '../../hacker-news-api.service';

@Component({
  selector: 'app-new-row',
  templateUrl: './new-row.component.html',
  styleUrls: ['./new-row.component.css']
})
export class NewRowComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  index: number;

  new: object;
  api: HackerNewsAPIService;

  constructor(api: HackerNewsAPIService){
    this.api = api;
  }

  ngOnInit() {
    this.new = {};
    this.api.getItem(this.id).subscribe(r => {
      this.new = r;
    });
  }


}
