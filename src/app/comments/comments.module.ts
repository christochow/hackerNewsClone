import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent} from './comment/comment.component';
import { CommentsComponent } from './comments/comments.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {PollComponent} from './poll/poll.component';
import {PolloptComponent} from './pollopt/pollopt.component';


@NgModule({
  declarations: [CommentComponent, CommentsComponent, PolloptComponent, PollComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [CommentsComponent]
})
export class CommentsModule { }
