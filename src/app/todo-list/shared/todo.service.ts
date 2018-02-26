import { Injectable } from '@angular/core';
import { todos } from "./data";
import { Todo } from "./todo";

@Injectable()
export class TodoService {
  private todos: Todo[] = todos;

  constructor() { }

  getTodos(): Todo[]{
    return this.todos;
  }

  createTodo(title: string) {
    this.todos.push(new Todo(title))
  }

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if (index > -1){
      this.todos.splice(index, 1);
    }
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
