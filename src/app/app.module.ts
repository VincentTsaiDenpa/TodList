import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemInputComponent } from './todo-item-input/todo-item-input.component';
import { TodoItemListComponent } from './todo-item-list/todo-item-list.component';
import { TodoItemEditComponent } from './todo-item-list/todo-item-edit/todo-item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemInputComponent,
    TodoItemListComponent,
    TodoItemEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
