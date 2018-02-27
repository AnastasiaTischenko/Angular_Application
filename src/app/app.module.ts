import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TodoListModule } from './todo-list/todo-list.module';
import { TranslatorModule } from './translator/translator.module';
import { AppRoutingModule } from './appRouting.module';
import { HomePageModule } from './home-page/home-page.module';

import { AppComponent } from './app.component';
// import {NavLinksComponent} from "./nav-links/nav-links.component";
import {NavLinksModule} from './nav-links/nav-links.module';

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
    NavLinksModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
