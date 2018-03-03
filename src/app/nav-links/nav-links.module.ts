import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

import { NavLinksComponent } from './nav-links.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    NavLinksComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [NavLinksComponent]
})
export class NavLinksModule { }
