import {Component} from '@angular/core';
import {HackerNewsAPIService} from '../hacker-news-api.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent {

  stories: any[];
  pageStories: any[];

  constructor(api: HackerNewsAPIService) {
    api.getAsk().subscribe(data => {
      this.stories = data as any[];
      this.pageStories = this.stories.splice(1,30);
    });
  }

}
