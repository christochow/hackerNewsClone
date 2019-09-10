import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new.component';
import { NewRowComponent } from './new-row/new-row.component';



@NgModule({
  declarations: [NewComponent, NewRowComponent],
  imports: [
    CommonModule
  ],
  exports: [NewComponent],
})
export class NewModule { }
