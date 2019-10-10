import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTopComponent } from './new-top.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [NewTopComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [NewTopComponent],
})
export class NewTopModule { }
