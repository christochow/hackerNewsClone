import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import {SharedModule} from '../shared/shared.module';
import { SubmissionsComponent } from './submissions/submissions.component';
import { SubmissionComponent } from './submission/submission.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [UserInfoComponent, SubmissionsComponent, SubmissionComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [UserInfoComponent, SubmissionsComponent]
})
export class UserModule { }
