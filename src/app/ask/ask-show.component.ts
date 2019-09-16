import {Component, OnInit} from '@angular/core';
import {HackerNewsAPIService} from '../hacker-news-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ask',
  templateUrl: './ask-show.component.html',
  styleUrls: ['./ask-show.component.css']
})
export class AskShowComponent implements OnInit{

  stories: any[];
  pageStories: any[];
  isShow: boolean;

  constructor(private api: HackerNewsAPIService, private router: Router) {
  }

  ngOnInit(): void {
    this.isShow = this.router.url === '/show';
    (this.isShow ? this.api.getShow() : this.api.getAsk()).subscribe(data => {
      this.stories = data as any[];
      this.pageStories = this.stories.splice(1, 30);
    });
  }

}
