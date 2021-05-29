import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'app-todo-item-input',
  templateUrl: './todo-item-input.component.html',
  styleUrls: ['./todo-item-input.component.css']
})
export class TodoItemInputComponent implements OnInit {
  itemInput:string="";
  @Output() itemEmit:EventEmitter<TodoItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  createItem():void{
    if(this.itemInput===""){
      alert("請勿輸入空值");
      return;
    }
    const item:TodoItem={name:this.itemInput,description:"",complete:false,editMode:false};
    this.itemEmit.emit(item);

    this.itemInput = "";
  }
}
