import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  template: `
    <div class="mb-5 flex gap-4">
      <button class="rounded-md border px-4 py-2" routerLink="video">
        Video
      </button>
      <button class="rounded-md border px-4 py-2" routerLink="phone">
        Phone
      </button>
    </div>
    <router-outlet />
  `,
  host: {
    class: 'p-10 flex flex-col',
  },
})
export class AppComponent {
  /* Information
  In this small application, we start with a VideoComponent containing a 1-second timer. The development team decided to use a global constant to store the timer value: DEFAULT_TIMER. 
  However, a few weeks later, the product team wants to add a new screen for phone calls called PhoneComponent, and we want to reuse the TimerComponent. However, the product team wants a timer of 2 seconds.
  How can we achieve this?

  Statement
  Currently, the timer is still 1 second for the PhoneComponent. The goal of this challenge is to change the timer value to 2 seconds for the PhoneComponent.

  Constraints
  The use of @Input is forbidden. This example is basic, and using @Input could be a good option, but in more complex applications, the component we need to update can be deeply nested, 
  making the use of @Input a really bad design. */
}
