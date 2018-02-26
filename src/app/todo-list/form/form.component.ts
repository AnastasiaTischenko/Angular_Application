import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from "../shared/todo.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  title: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  onSubmite(){
    this.todoService.createTodo(this.title);
  }
}
