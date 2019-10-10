import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskShowComponent } from './ask-show.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [AskShowComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    AskShowComponent
  ]
})
export class AskShowModule { }
