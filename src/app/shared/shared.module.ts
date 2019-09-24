import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RowComponent} from './row/row.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [RowComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RowComponent
  ]
})
export class SharedModule { }
