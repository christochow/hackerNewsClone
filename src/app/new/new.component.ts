import { Component, OnInit } from '@angular/core';
import {HackerNewsAPIService} from '../hacker-news-api.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit{

  stories: any[];
  pageStories: any[];

  constructor(private api: HackerNewsAPIService, private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Hacker news');
    this.api.getNews().subscribe(data => {
      this.stories = data as any[];
      this.pageStories = this.stories.splice(1, 30);
    });
  }

}
