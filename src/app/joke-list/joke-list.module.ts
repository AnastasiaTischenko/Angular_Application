import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JokeListComponent } from './joke-list.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeComponent } from './joke/joke.component';

@NgModule({
  declarations: [
    JokeListComponent,
    JokeFormComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class JokeListModule { }
