import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {SharedModule} from '../shared.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [MainPageComponent],
})
export class MainPageModule { }
