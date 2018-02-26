import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../shared/todo";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
 @Input() todo: Todo;
 @Output() delete = new EventEmitter();
 @Output() toggle = new EventEmitter();
  constructor() { }

  private onToggle(){
    this.toggle.emit(this.todo);
  }

  private onDelete(){
    this.delete.emit(this.todo)
  }
}
