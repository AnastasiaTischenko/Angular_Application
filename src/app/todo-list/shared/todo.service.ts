import { Injectable } from '@angular/core';
import { Todo } from "./todo";
import { AngularFireDatabase } from 'angularfire2/database';
import { database } from 'firebase'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {
  todosDB: Observable<any[]>;
  todo: Todo;

  constructor(db: AngularFireDatabase){
    this.todosDB = db.list('/todos').valueChanges();
  }

  getTodos(): Observable<any[]>{
    return this.todosDB;
  }

  createTodo(title: string) {
    database().ref('/todos/' + title).set(new Todo(title))
  }

  deleteTodo(todo: Todo) {
    database().ref('/todos/' + todo.title).remove();
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
    database().ref('/todos/' + todo.title).update(todo);
  }
}
