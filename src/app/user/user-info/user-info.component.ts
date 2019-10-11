import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {HackerNewsAPIService} from '../../hacker-news-api.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: any = {};
  ready = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: HackerNewsAPIService, private title: Title) {
  }

  ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        this.title.setTitle(`Profile: ${id} | HNC`)
        this.api.getUser(id).subscribe(data => {
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
