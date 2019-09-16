import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [NewComponent],
})
export class NewModule { }
