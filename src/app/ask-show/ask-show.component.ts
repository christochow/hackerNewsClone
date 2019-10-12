import {Component, OnDestroy, OnInit} from '@angular/core';
import {HackerNewsAPIService} from '../hacker-news-api.service';
import {ActivatedRoute, NavigationEnd, ParamMap, Router, RouterEvent} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, mergeMap, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-ask',
  templateUrl: './ask-show.component.html',
  styleUrls: ['./ask-show.component.css']
})
export class AskShowComponent implements OnInit, OnDestroy {

  stories: any[] = [];
  isShow: boolean;
  ready = false;
  listFull = false;
  subscription;
  pageSub;
  page = 1;
  onDisable = ($event, array) => array.filter(e => e !== $event.id);
  getData = (page) => {
    if (page !== undefined && page !== null) {
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
    return this.ready ? of(this.stories) : (this.isShow ? this.api.getShow() : this.api.getAsk());
  };
  subscribe = () => this.getData(this.route.snapshot.queryParamMap.get('p'))
    .subscribe(data => {
      this.stories = data as any[];
      this.ready = true;
      this.listFull = false;
    },
    err => {
      console.log(err);
      this.ready = true;
    });
  refresh = () => {
    this.subscription.unsubscribe();
    this.subscription = this.subscribe();
  };

  constructor(private api: HackerNewsAPIService, private router: Router, private titleService: Title, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isShow = this.router.url === '/show';
    this.titleService.setTitle((this.isShow ? 'Show stories' : 'Ask stories') + ' | HNC');
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
