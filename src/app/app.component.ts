import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  hasUser: boolean;
  isNewest = false;
  isAsk = false;
  isShow = false;
  isJobs = false;
  id: string;
  sub;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.sub = this.router.events.subscribe(
      value => {
        if (value instanceof NavigationEnd) {
          this.hasUser = value.url.includes('submissions');
          if (this.hasUser === true) {
            this.id = value.url.split('/')[2];
          }
          this.isNewest = value.url.includes('newest');
          this.isAsk = value.url.includes('ask');
          this.isShow = value.url.includes('show');
          this.isJobs = value.url.includes('jobs');
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.subscribe();
  }
}
