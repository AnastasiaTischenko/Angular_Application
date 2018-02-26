import { Component } from '@angular/core';
import {Todo} from "./shared/todo";
import { todos } from "./shared/data";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor() { }

  ngOnInit() {
  }

 }
