import {Component, OnInit, OnDestroy} from '@angular/core';
import {HackerNewsAPIService} from '../hacker-news-api.service';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, ParamMap, Router, RouterEvent} from '@angular/router';
import {filter, switchMap, take, takeWhile} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-new',
  templateUrl: './new-top.component.html',
  styleUrls: ['./new-top.component.css']
})
export class NewTopComponent implements OnInit, OnDestroy {

  stories: any[] = [];
  isTop: boolean;
  ready = false;
  listFull = false;
  page = 1;
  subscription;
  pageSub;
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
    return this.ready ? of(this.stories) : (this.isTop ? this.api.getTop() : this.api.getNews());
  };
  subscribe = () => this.getData(this.route.snapshot.queryParamMap.get('p'))
    .subscribe(data => {
        this.listFull = false;
        this.stories = data as any[];
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

  constructor(private api: HackerNewsAPIService, private titleService: Title, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isTop = this.router.url === '/news';
    this.titleService.setTitle(this.isTop ? 'Hacker news Clone' : 'New stories | HNC');
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
