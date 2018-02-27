import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { TodoListComponent } from './todo-list.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';

import { TodoService } from './shared/todo.service';

@NgModule({
  declarations: [
    TodoListComponent,
    FormComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoService]
})
export class TodoListModule {}
