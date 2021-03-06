import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TodoListModule } from './todo-list/todo-list.module';
import { TranslatorModule } from './translator/translator.module';
import { AppRoutingModule } from './appRouting.module';
import { HomePageModule } from './home-page/home-page.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { JokeListModule } from './joke-list/joke-list.module';
import { NavLinksModule } from './nav-links/nav-links.module';
import { FireBaseService} from './fire-base.service';
import { HttpService } from './http.service';
import { EnterGuard } from './enter.guard';
import {AuthorizationService} from './authorization.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TodoListModule,
    TranslatorModule,
    AppRoutingModule,
    HomePageModule,
    NavLinksModule,
    JokeListModule,
    HttpClientModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    FireBaseService,
    HttpService,
    EnterGuard,
    AuthorizationService
  ]
})
export class AppModule { }
