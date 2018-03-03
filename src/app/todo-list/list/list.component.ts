import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../shared/todo";
import { TodoService } from "../shared/todo.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos()
  }

  toggle(todo: Todo){
    this.todoService.toggleTodo(todo);
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo)
  }

  getTodos(){
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
  }
}
