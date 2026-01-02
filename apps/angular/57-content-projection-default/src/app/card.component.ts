import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <!-- <div>{{ title() }}</div>
    @if (message()) {
      <div>{{ message() }}</div>
    } @else {
      <div>Aucun message</div>
    } -->
    <ng-content select="div" />
    <ng-content select="p"></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'p-4 border border-grey rounded-sm flex flex-col w-[200px]',
  },
})
export class CardComponent {
  /* title = input.required<string>();
  message = input<string | undefined>(undefined); */
}
