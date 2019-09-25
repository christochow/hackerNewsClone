import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HackerNewsAPIService} from '../../hacker-news-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  @Input()
  index: number;

  @Input()
  id: string;

  @Output()
  disable = new EventEmitter();

  new: object;

  show = false;

  discuss: string;

  constructor(private api: HackerNewsAPIService) {
  }

  ngOnInit() {
    this.new = {};
    this.api.getItem(this.id).subscribe(r => {
      this.new = r;
      const hasKids = this.new['descendants'] !== undefined && this.new['descendants'] !== null;
      this.discuss = (!hasKids || this.new['descendants'] === 0) ?
        'discuss' : this.new['descendants'] + ' comment' + (this.new['descendants'] === 1 ? '' : 's');
      this.show = (!this.new['deleted'] === true) && (!this.new['dead'] === true) && (this.new['type'] === 'story');
      if (this.show === false) {
        this.disable.emit({id: this.id});
      }
    });
  }

}
