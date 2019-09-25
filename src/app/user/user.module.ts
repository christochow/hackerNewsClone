import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {SharedModule} from '../shared/shared.module';
import { SubmissionsComponent } from './submissions/submissions.component';
import { SubmissionComponent } from './submission/submission.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [UserComponent, SubmissionsComponent, SubmissionComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [UserComponent, SubmissionsComponent]
})
export class UserModule { }
