import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    new Todo("This is a test!"),
    new Todo("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non dolor est dicta, temporibus aliquid suscipit dolorum praesentium sed at cupiditate quasi voluptas quos rem quaerat facilis saepe laudantium earum reiciendis."),
  ]

  constructor() { 
  }

  getTodos() {
    return this.todos
  }

  getTodo(id: string) {
    return this.todos.find(t => t.id === id)
  }

  addTodo(todo: Todo) {
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
