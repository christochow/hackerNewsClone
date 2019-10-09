import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {HackerNewsAPIService} from '../../hacker-news-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: any = {};
  ready = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: HackerNewsAPIService) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getUser(params.get('id'))
      )).subscribe(data => {
        this.user = data;
        this.ready = true;
        },
      err => {
        console.log(err);
        this.ready = true;
      }
    );
  }

}
