import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentComponent} from './comment/comment.component';
import { CommentsComponent } from './comments/comments.component';



@NgModule({
  declarations: [CommentComponent, CommentsComponent],
  imports: [
    CommonModule
  ],
  exports: [CommentsComponent]
})
export class CommentsModule { }
