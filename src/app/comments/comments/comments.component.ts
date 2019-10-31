import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {HackerNewsAPIService} from '../../hacker-news-api.service';
import {filter, mergeMap, switchMap} from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, ParamMap, Router, RouterEvent} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {of} from 'rxjs';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {

  item: any = {kids: []};
  ready = false;
  isPoll;
  page = 1;
  subscription;
  pageSub;
  onDisable = ($event, array) => array.filter(e => e !== $event.id);
  getData = (page) => {
    if (!isNullOrUndefined(page)) {
      const temp = parseInt(page, 10);
      if (!(isNaN(temp) || temp < 1)) {
        if (temp >= this.page) {
          window.scroll(0, 0);
          if (temp === this.page) {
            this.ready = false;
          }
        }
        this.page = temp;
      }
    } else {
      if (this.page === 1 && this.ready === true) {
        this.ready = false;
      } else {
        this.page = 1;
      }
    }
    return this.ready ? of(this.item) : this.api.getItem(this.route.snapshot.paramMap.get('id'));
  };
  subscribe = () => this.getData(this.route.snapshot.queryParamMap.get('p'))
    .subscribe(data => {
        this.item = data;
        this.isPoll = this.item.type === 'poll';
        if (this.item.kids === undefined) {
          this.item.kids = [];
        }
        this.titleService.setTitle(this.item.title + ' | HNC');
        this.ready = true;
      },
      err => {
        console.log(err);
        this.ready = true;
      });
  refresh = () => {
    this.subscription.unsubscribe();
    this.subscription = this.subscribe();
  };

  constructor(private api: HackerNewsAPIService, private route: ActivatedRoute, private titleService: Title, private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.subscribe();
    this.pageSub = this.router.events.pipe(filter((e: RouterEvent) => e instanceof NavigationEnd)).subscribe(
      () => {
        this.refresh();
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.pageSub.unsubscribe();
  }

}
