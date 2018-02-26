import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from "../shared/todo.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  private title: string = '';

  constructor(private todoService: TodoService) { }

  private onSubmite(){
    this.todoService.createTodo(this.title);
  }
}
