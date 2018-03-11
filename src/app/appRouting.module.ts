import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import { TodoListComponent } from "./todo-list/todo-list.component";
import { TranslatorComponent } from "./translator/translator.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { JokeListComponent } from "./joke-list/joke-list.component";
import { EnterGuard } from './enter.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'todo-list', component: TodoListComponent, canActivate: [EnterGuard]},
  { path: 'translator', component: TranslatorComponent, canActivate: [EnterGuard]},
  { path: 'joke-list', component: JokeListComponent, canActivate: [EnterGuard]}
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes, {useHash: true})],
  providers:    [ EnterGuard ],
  exports:      [ RouterModule]
})
export class AppRoutingModule { }
