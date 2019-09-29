import {Component, Input, OnInit} from '@angular/core';
import {HackerNewsAPIService} from '../../hacker-news-api.service';

@Component({
  selector: '[app-comment]',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  depth: number;

  @Input()
  id: string;

  item: any = {};

  style: object;

  constructor(private api: HackerNewsAPIService) { }

  ngOnInit() {
    this.style = {
      width: 10 * this.depth + 'px'
    };
    this.api.getItem(this.id).subscribe(data => {
      this.item = data;
    });
  }

}
