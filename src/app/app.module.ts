import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NewModule} from './new/new.module';
import {HttpClientModule} from '@angular/common/http';
import {AskModule} from './ask/ask.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NewModule,
    AskModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
