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
  isNews: boolean;

  new: object;

  constructor(private api: HackerNewsAPIService, private router: Router) {
  }

  ngOnInit() {
    this.isNews = this.router.url === '/newest';
    this.new = {};
    this.api.getItem(this.id).subscribe(r => {
      this.new = r;
    });
  }



}
