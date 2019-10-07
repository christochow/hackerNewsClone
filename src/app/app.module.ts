import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NewTopModule} from './new-top/new-top.module';
import {HttpClientModule} from '@angular/common/http';
import {AskShowModule} from './ask-show/ask-show.module';
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
    NewTopModule,
    AskShowModule,
    CommentsModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
