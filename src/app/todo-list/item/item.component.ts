import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../shared/todo";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 @Input() todo: Todo;
 @Output() delete = new EventEmitter();
 @Output() toggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onToggle(){
    console.log(typeof this.toggle)
    this.toggle.emit(this.todo);
  }

  onDelete(){
    this.delete.emit(this.todo)
  }
}
