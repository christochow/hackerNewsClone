import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Router, RouterEvent} from '@angular/router';
import {HackerNewsAPIService} from '../../hacker-news-api.service';
import {Title} from '@angular/platform-browser';
import {of} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit, OnDestroy {

  user: any;
  id;
  subscription;
  pageSub;
  page = 1;
  ready = false;
  listFull = false;
  onDisable = ($event, array) => array.filter(e => e !== $event.id);
  getDataAndSetPage = (page, id) => {
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
      this.page = 1;
    }
    return this.ready ? of(this.user) : this.api.getUser(id);
  };
  subscribe = () => this.getDataAndSetPage(this.route.snapshot.queryParamMap.get('p'), this.id)
    .subscribe(data => {
        this.user = data;
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

  constructor(private router: Router, private route: ActivatedRoute, private api: HackerNewsAPIService, private title: Title) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.title.setTitle(`${this.id}'s submissions | HNC`);
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
