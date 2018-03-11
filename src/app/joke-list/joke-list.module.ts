import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JokeListComponent } from './joke-list.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeComponent } from './joke/joke.component';
import { CardHoverDirective } from './shared-jokes-data/card-hover-directive';
import {JokeService} from './shared-jokes-data/joke.service';

@NgModule({
  declarations: [
    JokeListComponent,
    JokeFormComponent,
    JokeComponent,
    CardHoverDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [JokeService]
})
export class JokeListModule { }
