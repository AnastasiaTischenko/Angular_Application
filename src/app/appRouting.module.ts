import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

// import { NavLinksComponent } from "./nav-links/nav-links.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TranslatorComponent } from "./translator/translator.component";
import { HomePageComponent } from "./home-page/home-page.component";

const appRoutes: Routes =[
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent,},
  { path: 'todo-list', component: TodoListComponent,},
  { path: 'translator', component: TranslatorComponent,}
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes, {useHash: true})],
  exports:      [ RouterModule]
})
export class AppRoutingModule { }
