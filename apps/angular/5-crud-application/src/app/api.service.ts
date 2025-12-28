import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { randText } from '@ngneat/falso';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  todos = signal<Todo[]>([]);
  loading = signal<boolean>(false);

  getTodos(): void {
    this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((todos) => {
        this.todos.set(todos);
      });
  }

  update(todo: Todo) {
    this.loading.set(true);
    this.http
      .put<Todo>(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        JSON.stringify({
          todo: todo.id,
          title: randText(),
          body: todo.body,
          userId: todo.userId,
        }),
        {
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      )
      .subscribe({
        next: (todoUpdated: Todo) => {
          let indexOfTodo = this.todos().findIndex(
            (todo) => todo.id === todoUpdated.id,
          );
          let valueOfTodos = this.todos();
          valueOfTodos[indexOfTodo] = todoUpdated;
          this.todos.set(valueOfTodos);
        },
        complete: () => this.loading.set(false),
      });
  }

  delete(todo: Todo) {
    this.todos.set(this.todos().filter((todoItem) => todoItem.id !== todo.id));
  }
}
