import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Todo } from './todo.model';

@Component({
  imports: [],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  /* Step 1: refactor with best practices
What you will need to do:

Avoid any as a type. Using Interface to leverage Typescript type system prevent errors
Use a separate service for all your http calls and use a Signal for your todoList
Don’t mutate data
// Avoid this
this.todos[todoUpdated.id - 1] = todoUpdated;

// Prefer something like this, but need to be improved because we still want the same order
this.todos = [...this.todos.filter((t) => t.id !== todoUpdated.id), todoUpdated];

Step 2: Improve
Add a Delete button: Doc of fake API
Handle errors correctly. (Globally)
Add a Global loading indicator. You can use MatProgressSpinnerModule
Step 3: Maintainability!! add some test
Add 2/3 tests
Step 4: Awesomeness!!! master your state. */

  private api = inject(ApiService);

  todos = this.api.todos;
  loading = this.api.loading;

  ngOnInit(): void {
    this.api.getTodos();
  }

  update(todo: Todo) {
    this.api.update(todo);
  }

  delete(todo: Todo) {
    this.api.delete(todo);
  }
}
