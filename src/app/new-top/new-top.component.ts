import {Component, OnInit} from '@angular/core';
import {HackerNewsAPIService} from '../hacker-news-api.service';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new-top.component.html',
  styleUrls: ['./new-top.component.css']
})
export class NewTopComponent implements OnInit {

  stories: any[];
  pageStories: any[];
  isTop: boolean;
  ready = false;

  constructor(private api: HackerNewsAPIService, private titleService: Title, private router: Router) {
  }

  ngOnInit(): void {
    this.isTop = this.router.url === '/news';
    this.titleService.setTitle('Hacker news Clone');
    this.isTop ? this.api.getTop().subscribe(data => {
      this.ready = true;
      this.stories = data as any[];
      this.pageStories = this.stories.slice(0, 30);
    }) : this.api.getNews().subscribe(data => {
      this.stories = data as any[];
      this.pageStories = this.stories.slice(0, 30);
    });
  }

}
