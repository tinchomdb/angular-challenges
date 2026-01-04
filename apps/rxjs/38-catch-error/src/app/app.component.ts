import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Subject, catchError, concatMap, map, of } from 'rxjs';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  submit$ = new Subject<void>();
  input = '';
  response: unknown;

  private destroyRef = inject(DestroyRef);
  private http = inject(HttpClient);

  ngOnInit() {
    this.submit$
      .pipe(
        map(() => this.input),
        concatMap((value) =>
          this.http.get(`https://jsonplaceholder.typicode.com/${value}/1`).pipe(
            catchError((error) => {
              console.log(error);
              return of(null);
            }),
          ),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (value) => {
          console.log(value);
          this.response = value;
        },
        error: (error) => {
          console.log(error);
          this.response = error;
        },
        complete: () => console.log('done'),
      });
  }

  /* 
  Information
How to Use the Application
Our application features a form with a text input box and a “Fetch” button. Upon clicking the “Fetch” button, data is retrieved from a free API.

The correct values for a successful response are limited to: posts, comments, albums, photos, todos, and users. Any other values will result in an error response.

Bug
A bug has been identified in our application. Users are only able to successfully fetch data until an invalid request is sent. Once an error response is received, users are unable to send additional requests.

Learnings
This application provides an opportunity to understand the correct placement of a catchError operator. If placed incorrectly, the overall subscription will be completed, preventing users from sending more requests. The goal is to preserve the overall subscription by handling error notifications from inner observables appropriately.

Statement
The goal is to use the catchError operator to handle error management inside your Rxjs stream.

Constraints
Users should be able to log the value/error each time they click the “Fetch” button.
  */
}
