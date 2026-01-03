import { Component } from '@angular/core';
import { generateList } from './generateList';
import { PersonListComponent } from './person-list.component';

@Component({
  imports: [PersonListComponent],
  selector: 'app-root',
  template: `
    <p>Performance is key!!</p>
    <button
      (click)="loadList = true"
      class="rounded-md border border-black p-2">
      Load List
    </button>

    @if (loadList) {
      <app-person-list class="max-w-2xl" [persons]="persons" title="Persons" />
    }
  `,
})
export class AppComponent {
  persons = generateList();
  loadList = false;

  /* 
  Information
In Angular, pure Pipes are very powerful because the value is memoized, which means if the input value doesn’t change, the transform function of the pipe is not recomputed, and the cached value is outputted.

You can learn more about pipes in the Angular documentation and inside this deep dive article.

In this challenge, we start with a button to load a list of people. Each person is associated with a number, and we will use the Fibonacci calculation to create a heavy computation that will slow down the application.

Once the list is loaded, try typing some letters inside the input field. You will notice that the application is very slow, even though you are only performing very basic typing.

Note

We will not focus on the initial loading of the list in this challenge.

Let’s use the Angular DevTool to profile our application and understand how this tool can help us understand what is happening inside our application.

Note

If you don’t know how to use it, read the performance introduction page first and come back after.

Now, start profiling your application and type some letters inside the input field. You will see some red bars showing up inside the profiler panel.

If you click on one of the bars (indicated by the yellow arrow in the picture below), you will see that the change detection cycle is taking more than 3s in PersonListComponent.

profiler record

Statement
The goal of this challenge is to understand what is causing this latency and to improve it.

Hints:
Hint 1
Use Pipes to memoize the Fibonacci computation.
  
  */
}
