import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HackerNewsAPIService} from '../../hacker-news-api.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  user: any;
  submissions = [];
  onDisable;
  ready = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: HackerNewsAPIService) {
    this.onDisable = ($event, array) => {
      return array.filter(e => e !== $event.id);
    };
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getUser(params.get('id'))
      )).subscribe(data => {
        this.user = data;
        this.submissions = this.user.submitted;
        this.ready = true;
      },
      err => {
        console.log(err);
        this.ready = true;
      });
  }

}
