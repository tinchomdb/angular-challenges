import { Component } from '@angular/core';
import { Format } from './format.pipe';

@Component({
  selector: 'app-root',
  imports: [Format],
  template: `
    @for (person of persons; track person) {
      <!-- {{ heavyComputation(person, $index) }} -->
      {{ person | format: $index }}
    }
  `,
})
export class AppComponent {
  /* Pipes are a very powerful way to transform data in your template. The difference between calling a function and a pipe is that pure pipes are memoized. So, they won’t be recalculated every change detection cycle if their inputs haven’t changed.

  Pipes are designed to be efficient and optimized for performance. They use change detection mechanisms to only recalculate the value if the input changes, to minimize unnecessary calculations and improve rendering performance.

  By default, a pipe is pure. You should be aware that setting pure to false is prone to be inefficient, because it increases the amount of rerenders.

  Note

  A pure pipe is only called when the value changes.
  A impure pipe is called every change detection cycle.

  There are some useful predefined pipes like the DatePipe, UpperCasePipe and CurrencyPipe. To learn more about pipes in Angular, check the API documentation here.

  Statement
  In this exercise, you need to refactor a transform function inside a component, which is called inside your template. The goal is to convert this function to a pipe.

  Constraints
  Must be strongly typed
  */

  persons = ['toto', 'jack'];

  heavyComputation(name: string, index: number) {
    // very heavy computation
    return `${name} - ${index}`;
  }
}
