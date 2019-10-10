import {Component, Input, OnInit} from '@angular/core';
import {HackerNewsAPIService} from '../../hacker-news-api.service';
import {mergeMap, switchMap} from 'rxjs/operators';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  item: any = {kids: []};
  ready = false;
  page = 1;
  onDisable = ($event, array) => array.filter(e => e !== $event.id);
  getData = (page) => {
    if (page !== undefined && page !== null) {
      const temp = parseInt(page, 10);
      if (!(isNaN(temp) || temp < 1)) {
        if (temp > this.page) {
          window.scroll(0, 0);
        }
        this.page = temp;
      }
    } else {
      this.page = 1;
    }
    return this.api.getItem(this.route.snapshot.paramMap.get('id'));
  };

  constructor(private api: HackerNewsAPIService, private route: ActivatedRoute, private titleService: Title) {
  }

  ngOnInit() {
    this.route.queryParamMap.pipe(
      switchMap((param: ParamMap) => this.getData(param.get('p')))
    ).subscribe(data => {
        this.item = data;
        this.titleService.setTitle(this.item.title);
        this.ready = true;
      },
      err => {
        console.log(err);
        this.ready = true;
      });
  }

}
