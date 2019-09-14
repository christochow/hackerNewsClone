import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AskComponent } from './ask.component';
import { AskRowComponent } from './ask-row/ask-row.component';



@NgModule({
  declarations: [ AskRowComponent, AskComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AskComponent
  ]
})
export class AskModule { }
