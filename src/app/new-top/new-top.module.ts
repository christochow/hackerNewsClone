import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTopComponent } from './new-top.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [NewTopComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [NewTopComponent],
})
export class NewTopModule { }
