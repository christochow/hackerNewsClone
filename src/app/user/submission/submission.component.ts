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

  @Output()
  listFull = new EventEmitter();

  submission: any = {};


  discuss: string;

  constructor(private api: HackerNewsAPIService) {
  }

  ngOnInit() {
    this.api.getItem(this.id).subscribe(r => {
      if (r === null) {
        this.disable.emit({id: this.id});
        return;
      }
      this.submission = r;
      const hasKids = this.submission.descendants !== undefined && this.submission.descendants !== null;
      this.discuss = (!hasKids || this.submission.descendants === 0) ?
        'discuss' : this.submission.descendants + ' comment' + (this.submission.descendants === 1 ? '' : 's');
      const show = (this.submission.deleted !== true) && (this.submission.dead !== true) && (this.submission.type !== 'comment')
        && (this.submission.type !== 'pollopt');
      if (show === false) {
        this.disable.emit({id: this.id});
      } else if (this.index % 30 === 0) {
        this.listFull.emit();
      }
    });
  }

}
