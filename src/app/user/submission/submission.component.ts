import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HackerNewsAPIService} from '../../hacker-news-api.service';
import {Router} from '@angular/router';
import {isNotNullOrUndefined} from "codelyzer/util/isNotNullOrUndefined";

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

  isPoll: boolean;

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
      this.isPoll = this.submission.type === 'poll';
      const hasKids = isNotNullOrUndefined(this.submission.descendants);
      this.discuss = (!hasKids || this.submission.descendants === 0) ?
        'discuss' : this.submission.descendants + ' comment' + (this.submission.descendants === 1 ? '' : 's');
      const show = (this.submission.deleted !== true) && (this.submission.dead !== true) && (this.submission.type !== 'comment')
        && (this.submission.type !== 'pollopt') && isNotNullOrUndefined(this.submission.title);
      if (show === false) {
        this.disable.emit({id: this.id});
      } else if (this.index % 30 === 0) {
        this.listFull.emit();
      }
    });
  }

}
