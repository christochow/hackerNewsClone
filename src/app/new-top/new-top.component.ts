import {Component, OnInit} from '@angular/core';
import {HackerNewsAPIService} from '../hacker-news-api.service';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-new',
  templateUrl: './new-top.component.html',
  styleUrls: ['./new-top.component.css']
})
export class NewTopComponent implements OnInit {

  stories: any[] = [];
  isTop: boolean;
  ready = false;
  listFull = false;
  page = 1;
  onDisable = ($event, array) => array.filter(e => e !== $event.id);
  getData = (page) => {
    if (page !== undefined) {
      const temp = parseInt(page, 10);
      if (!(isNaN(temp) || temp < 1)) {
        this.page = temp;
      }
    }
    return this.isTop ? this.api.getTop() : this.api.getNews();
  };

  constructor(private api: HackerNewsAPIService, private titleService: Title, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isTop = this.router.url === '/news';
    this.titleService.setTitle('Hacker news Clone');
    this.route.queryParamMap.pipe(
      mergeMap((param: ParamMap) => this.getData(param.get('p')))
    )
      .subscribe(data => {
          this.listFull = false;
          this.stories = data as any[];
          this.ready = true;
        },
        err => {
          console.log(err);
          this.ready = true;
        });
  }

}
