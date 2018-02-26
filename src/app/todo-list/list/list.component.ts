import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../shared/todo";
import { TodoService } from "../shared/todo.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  private todos: Todo[];

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos()
  }

  private toggle(todo: Todo){
    this.todoService.toggleTodo(todo);
  }

  private delete(todo: Todo) {
    this.todoService.deleteTodo(todo)
  }
}
