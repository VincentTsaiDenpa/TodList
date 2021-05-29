import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todoItems:TodoItem[] = [];

  constructor(){

  }

  ngOnInit(){

  }

  addTodoItem(item:TodoItem){
    sessionStorage.setItem('','');
    this.todoItems.push(item);
  }

  update(items:TodoItem[]){
    this.todoItems=items;
  }
}
