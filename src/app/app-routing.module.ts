import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewTopComponent} from './new-top/new-top.component';
import {AskShowComponent} from './ask-show/ask-show.component';
import {CommentsComponent} from './comments/comments/comments.component';
import {UserComponent} from './user/user/user.component';
import {SubmissionsComponent} from './user/submissions/submissions.component';


const routes: Routes = [
  {path: '', redirectTo: 'newest', pathMatch: 'full'},
  {path: 'comments/:id', component: CommentsComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'user/submissions/:id', component: SubmissionsComponent},
  {path: 'newest', component: NewTopComponent},
  {path: 'ask-show', component: AskShowComponent},
  {path: 'show', component: AskShowComponent},
  {path: '**', redirectTo: 'news', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
