import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

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
    this.hasUser = this.router.url.includes('submissions');
    if (this.hasUser === true) {
      this.id = this.route.snapshot.paramMap.get('id');
    }
  }
}
