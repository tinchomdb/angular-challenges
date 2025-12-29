import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="flex gap-2">
      <button
        routerLink="home"
        class="rounded-md border border-blue-400 px-4 py-2">
        Home
      </button>
      <button
        routerLink="admin"
        class="rounded-md border border-blue-400 px-4 py-2">
        Admin
      </button>
      <button
        routerLink="user"
        class="rounded-md border border-blue-400 px-4 py-2">
        User
      </button>
    </div>
    <router-outlet></router-outlet>
  `,
  host: {
    class: 'flex flex-col p-4 gap-3',
  },
})
export class AppComponent {
  /* 
  the goal is to see how Nx and standalone components work together, and experience the process of decoupling your app with Nx lib and standalone components.

  Finally, standalone components are very simple to understand, but routing/lazy-loaded components can be a bit harder to grasp. This challenge will allow you to manipulate components at different levels of nesting and work with lazy loaded routes.

  After completing this challenge, standalone components will no longer hold any secrets for you.

  Statement
  The goal of this challenge is to migrate your application from module based components to standalone components.

  Note
  You can also test the Angular schematic to migrate NgModule to Standalone components. (Since we are using nx, start your command with nx instead of ng) 
  */
}
