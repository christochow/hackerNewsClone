import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hasUser: boolean;
  id: string;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(
      value => {
        if (value instanceof NavigationEnd) {
          this.hasUser = value.url.includes('submissions');
          if (this.hasUser === true) {
            this.id = value.url.split('/')[2];
          }
        }
      }
    );
  }
}
