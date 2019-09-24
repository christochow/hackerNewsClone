import {Component, Input, OnInit} from '@angular/core';
import {HackerNewsAPIService} from '../../hacker-news-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  index: number;

  @Input()
  isCommentPage: boolean;

  isNews: boolean;

  new: object;

  discuss: string;

  constructor(private api: HackerNewsAPIService, private router: Router) {
  }

  ngOnInit() {
    this.isNews = this.router.url === '/newest';
    this.new = {};
    this.api.getItem(this.id).subscribe(r => {
      this.new = r;
      const hasKids = this.new['kids'] !== undefined && this.new['kids'] !== null;
      this.discuss = (!hasKids || this.new['kids'].length === 0) ?
        'discuss' : this.new['kids'].length + ' comment' + (this.new['kids'].length === 1 ? '' : 's');
    });
  }



}
