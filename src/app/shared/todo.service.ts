import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[]

  constructor() { }

  getTodos() {
    return this.todos
  }

  getTodo(id: string) {
    return this.todos.find(t => t.id === id)
  }

  adTodo(todo: Todo) {
    this.todos.push(todo)
  }

  updateTodo(id: string, updatedFields: Partial<Todo>) {
    const todo = this.getTodo(id)
    Object.assign(todo, updatedFields)
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex(t => t.id === id)
    if(index < 0) return
    
    this.todos.splice(index, 1)
  }
}
