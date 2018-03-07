import { Component, ViewChildren, QueryList, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { Joke } from './shared-jokes-data/joke'
import { JokeComponent } from './joke/joke.component'

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements AfterViewInit{
  jokes: Joke[];
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("header") headerEl: ElementRef;
  constructor() {
    this.jokes = [
      new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }

  ngAfterViewInit() {
    let jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    this.headerEl.nativeElement.textContent = "Best Joke Machine";
  }
}
