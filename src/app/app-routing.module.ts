import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewComponent} from './new/new.component';
import {AskShowComponent} from './ask/ask-show.component';


const routes: Routes = [
  {path: '', redirectTo: 'newest', pathMatch: 'full'},
  {path: 'newest', component: NewComponent},
  {path: 'ask', component: AskShowComponent},
  {path: 'show', component: AskShowComponent},
  {path: '**', redirectTo: 'news', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
