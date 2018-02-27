import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { NavLinksComponent } from './nav-links.component';

@NgModule({
  declarations: [
    NavLinksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [NavLinksComponent]
})
export class NavLinksModule { }
