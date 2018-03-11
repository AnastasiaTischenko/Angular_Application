import { Component } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  private title: string = '';

  constructor(private todoService: TodoService) { }

  onSubmite() {
    this.todoService.createTodo(this.title);
  }
}
