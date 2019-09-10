import { Component, OnInit } from '@angular/core';
import {HackerNewsAPIService} from '../hacker-news-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  stories: any[];
  pageStories: any[];

  constructor(api: HackerNewsAPIService) {
    api.getNews().subscribe(data => {
      this.stories = data as any[];
      this.pageStories = this.stories.splice(1,30);
    });
  }

}
