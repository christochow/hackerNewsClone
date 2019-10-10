import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output()
  onDisable = new EventEmitter();

  item: any = {};

  style: object;

  constructor(private api: HackerNewsAPIService) {
  }

  ngOnInit() {
    this.style = {
      width: 10 * this.depth + 'px'
    };
    this.api.getItem(this.id).subscribe(data => {
      this.item = data;
      if (this.item === null || this.item.dead === true || this.item.deleted === true) {
        this.onDisable.emit({id: this.id});
      }
    });
  }

}
