import { Component, ViewChildren, QueryList, AfterViewInit, ViewChild, ElementRef, OnInit} from '@angular/core';
import { Joke } from './shared-jokes-data/joke';
import { JokeComponent } from './joke/joke.component';
import {JokeService} from './shared-jokes-data/joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit, AfterViewInit{
  jokes: Joke[];
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild('header') headerEl: ElementRef;
  constructor(private jokeServices: JokeService) {
  }

  ngOnInit() {
    this.getJokes();
  }

  addJoke(joke) {
    this.jokeServices.createJoke(joke);
  }

  ngAfterViewInit() {
    this.headerEl.nativeElement.textContent = 'Best Joke Machine';
  }

  getJokes(){
    this.jokeServices.getJoke().subscribe(jokes => this.jokes = jokes);
  }
}
