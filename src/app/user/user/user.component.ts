import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {HackerNewsAPIService} from '../../hacker-news-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any = {};
  ready = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: HackerNewsAPIService) {}

  ngOnInit(): void {
      this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.api.getUser(params.get('id'))
      )).subscribe(data => {
        this.ready = true;
        this.user = data;
      });
  }

}
