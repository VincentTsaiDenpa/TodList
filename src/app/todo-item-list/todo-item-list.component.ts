import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.css']
})
export class TodoItemListComponent implements OnInit {
  @Input() todoItems:TodoItem[]=[];
  @Output() todoItemsEmit:EventEmitter<TodoItem[]> = new EventEmitter<TodoItem[]>();
  constructor() { }

  ngOnInit(): void {
  }

  editItem(item:TodoItem){
    //item.description = "decr";
    item.editMode = true;
  }

  removeItem(item:TodoItem){
    this.todoItems = this.todoItems.filter(i=>i!==item);
    this.todoItemsEmit.emit(this.todoItems);
  }
}
