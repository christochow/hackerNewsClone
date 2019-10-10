import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HackerNewsAPIService} from '../../hacker-news-api.service';
import {mergeMap, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  user: any;
  submissions = [];
  page = 1;
  ready = false;
  listFull = false;
  onDisable = ($event, array) => array.filter(e => e !== $event.id);
  getDataAndSetPage = (page, id) => {
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
    return this.api.getUser(id);
  };

  constructor(private router: Router, private route: ActivatedRoute, private api: HackerNewsAPIService) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) =>
        this.getDataAndSetPage(params.get('p'), this.route.snapshot.paramMap.get('id'))
      )).subscribe(data => {
        this.user = data;
        this.submissions = this.user.submitted;
        this.ready = true;
        this.listFull = false;
      },
      err => {
        console.log(err);
        this.ready = true;
      });
  }

}
