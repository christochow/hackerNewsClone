import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskShowComponent } from './ask-show.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [AskShowComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AskShowComponent
  ]
})
export class AskShowModule { }
