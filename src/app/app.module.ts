import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NewModule} from './new/new.module';
import {HttpClientModule} from '@angular/common/http';
import {AskShowModule} from './ask/ask-show.module';
import {CommentsModule} from './comments/comments.module';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NewModule,
    AskShowModule,
    CommentsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
