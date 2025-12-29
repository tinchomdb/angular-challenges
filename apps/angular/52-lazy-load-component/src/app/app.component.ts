import { Component, signal } from '@angular/core';
import { PlaceholderComponent } from './placeholder.component';
import { TopComponent } from './top.component';

@Component({
  selector: 'app-root',
  imports: [TopComponent, PlaceholderComponent],
  template: `
    <div class="h-screen bg-gray-500">
      <!-- @if (topLoaded()) {
        <app-top />
      } @else {
        <app-placeholder />
        <button
          class="rounded-sm border border-blue-500 bg-blue-300 p-2"
          (click)="topLoaded.set(true)">
          Load Top
        </button>
      } -->
      @defer (when topLoaded()) {
        <app-top />
      } @placeholder (minimum 500ms) {
        <app-placeholder />
        <button
          class="rounded-sm border border-blue-500 bg-blue-300 p-2"
          (click)="topLoaded.set(true)">
          Load Top
        </button>
      }
    </div>
  `,
  standalone: true,
})
export class AppComponent {
  topLoaded = signal(false);

  /*
  This is a simple application that can display a TopComponent that we are pretending would slow the application down if it were part of the initial bundle (it actually contains just a bit of text, but we are pretending).

  The current implementation shows a PlaceholderComponent until the user clicks a button to display the TopComponent. However, even though the TopComponent isn’t visible until the button is clicked, it is still loaded as part of the initial bundle.

  Use a new feature of Angular 17 to lazy load the TopComponent so that it is visible and loaded when the user clicks the button to display it.

  When you are done, you should be able to see the TopComponent being loaded into the browser in a separate bundle when you click the button to display it. In Chrome, you should see this by opening the DevTools, going to the Network tab, and then clicking the button to display the TopComponent.

  Hints
  Hint 1
  You should be able to remove the topLoaded signal when you are done.

  Hint 2
  The new Angular feature will hide the TopComponent from view, but it will still be loaded in the initial bundle unless you change how both AppComponent and TopComponent are defined in their decorators. This challenge start with the old NgModule-based architecture, but you will need to change it to use the new feature.

  Hint 3
  The new feature is Deferrable Views, which provides several different triggers. One of them is ideal for this challenge. 
  */
}
