import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from './card.component';

@Component({
  imports: [CardComponent],
  selector: 'app-root',
  template: `
    <app-card>
      <div>Titre 1</div>
      <p>Message1</p>
    </app-card>
    <app-card>
      <div>Titre 2</div>
      <p>Aucun message</p>
    </app-card>
  `,
  host: {
    class: 'p-4 block flex flex-col gap-1',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  /* 
  
  Your task is to refactor the existing shared component to remove all input properties and instead use Angular’s <ng-content> for content projection. After your modifications, the application should look and function exactly as before, but without any input.

  Steps to complete:
  Identify all input properties in the shared component.
  Remove them and replace them with appropriate <ng-content> containers.
  Adjust the parent component to pass the necessary content using content projection instead of binding to inputs.
  Ensure that the application still displays the same UI and behavior after the changes.
  Constraints
  You must not use any input in the shared component.
  The application’s UI and functionality must remain unchanged after the refactoring.
  You must use <ng-content> for content projection.
  Do not introduce additional properties or services to pass data.
  Ensure that projected content is correctly styled and positioned as before. 
  */
}
