import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class HomePageModule {}
