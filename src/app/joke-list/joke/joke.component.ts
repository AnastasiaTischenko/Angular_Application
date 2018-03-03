import { Component, Input } from '@angular/core';
import { Joke } from "../shared-jokes-data/joke";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent{
  @Input('joke') data: Joke;
}
