import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewTopComponent} from './new-top/new-top.component';
import {AskShowComponent} from './ask-show/ask-show.component';
import {CommentsComponent} from './comments/comments/comments.component';
import {UserInfoComponent} from './user/user-info/user-info.component';
import {SubmissionsComponent} from './user/submissions/submissions.component';


const routes: Routes = [
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {path: 'comments/:id', component: CommentsComponent},
  {path: 'user/:id', component: UserInfoComponent},
  {path: 'user/:id/submissions', component: SubmissionsComponent},
  {path: 'newest', component: NewTopComponent},
  {path: 'ask', component: AskShowComponent},
  {path: 'show', component: AskShowComponent},
  {path: 'news', component: NewTopComponent},
  {path: '**', redirectTo: 'news', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
