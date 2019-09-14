import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewComponent} from './new/new.component';
import {AskComponent} from './ask/ask.component';


const routes: Routes = [
  {path: '', redirectTo: 'news', pathMatch: 'full'},
  {path: 'news', component: NewComponent},
  {path: 'ask', component: AskComponent},
  {path: '**', redirectTo: 'news', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
