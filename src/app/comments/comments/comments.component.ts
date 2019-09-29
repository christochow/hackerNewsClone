import {Component, Input, OnInit} from '@angular/core';
import {HackerNewsAPIService} from '../../hacker-news-api.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  item: any = {};

  constructor(private api: HackerNewsAPIService, private route: ActivatedRoute, private titleService: Title) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getItem(params.get('id')))
    ).subscribe(data => {
      this.item = data;
      this.titleService.setTitle(this.item['title']);
    });
  }

}
