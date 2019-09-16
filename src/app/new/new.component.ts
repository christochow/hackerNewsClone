import { Component, OnInit } from '@angular/core';
import {HackerNewsAPIService} from '../hacker-news-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit{

  stories: any[];
  pageStories: any[];

  constructor(private api: HackerNewsAPIService, private router: Router) {}

  ngOnInit(): void {
    this.api.getNews().subscribe(data => {
      this.stories = data as any[];
      this.pageStories = this.stories.splice(1, 30);
    });
  }

}
