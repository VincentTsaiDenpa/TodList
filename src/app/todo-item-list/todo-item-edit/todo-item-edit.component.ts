import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../../todo-item';

@Component({
  selector: 'app-todo-item-edit',
  templateUrl: './todo-item-edit.component.html',
  styleUrls: ['./todo-item-edit.component.css']
})
export class TodoItemEditComponent implements OnInit {
  @Input() todoItem!:TodoItem;
  //@Output() todoItemEmit:EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  todoDetail:string = "2222";
  constructor() { }

  ngOnInit(): void {
    this.todoDetail = this.todoItem.description;
  }

  updateItem(){
    this.todoItem.description = this.todoDetail;
    this.todoItem.editMode = false;
  }
}
