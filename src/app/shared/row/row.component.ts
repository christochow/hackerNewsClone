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

  new: any = {};

  discuss: string;

  constructor(private api: HackerNewsAPIService, private router: Router) {
  }

  ngOnInit() {
    this.isNews = this.router.url === '/newest';
    this.api.getItem(this.id).subscribe(r => {
      this.new = r;
      const hasKids = this.new['descendants'] !== undefined && this.new['descendants'] !== null;
      this.discuss = (!hasKids || this.new['descendants'] === 0) ?
        'discuss' : this.new['descendants'] + ' comment' + (this.new['descendants'] === 1 ? '' : 's');
    });
  }



}
