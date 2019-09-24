import {Component, Input, OnInit} from '@angular/core';
import {HackerNewsAPIService} from '../../hacker-news-api.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input()
  item: object;

  constructor(private api: HackerNewsAPIService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.item = {};
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getItem(params.get('id')))
    ).subscribe(data => {
      this.item = data;
      console.log(this.item)
    });
  }

}
