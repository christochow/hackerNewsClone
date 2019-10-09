import {Component, OnInit} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HackerNewsAPIService} from './hacker-news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hackerNewsClone';
  hasUser: boolean;
  id: string;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.hasUser = this.router.url.includes('user-info/submissions');
    if (this.hasUser === true) {
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          params.get('id'))
      ).subscribe(data => {
        this.id = data;
      });
    }
  }
}
