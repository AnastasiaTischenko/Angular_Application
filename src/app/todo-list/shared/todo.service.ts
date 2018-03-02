import { Injectable } from '@angular/core';
import { Todo } from "./todo";
// import { AngularFireDatabase } from 'angularfire2/database';
import { database } from 'firebase'
import { Observable } from 'rxjs/Observable';
import { FireBaseService} from "../../fire-base.service";

@Injectable()
export class TodoService {
  ref: string  = '/todos'
  todo: Todo;

  constructor(private firebaseService: FireBaseService){}

  getTodos(): Observable<Todo[]>{
    return this.firebaseService.getDataList(this.ref);
  }

  createTodo(title: string) {
    this.firebaseService.createData(this.ref + '/' + title, new Todo(title))
  }

  deleteTodo(todo: Todo) {
    this.firebaseService.deleteData(this.ref + '/' + todo.title)
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
    this.firebaseService.updateData(this.ref + '/' + todo.title, todo)
  }
}
