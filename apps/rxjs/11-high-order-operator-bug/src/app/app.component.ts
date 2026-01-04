/* eslint-disable @angular-eslint/component-selector */
import { Component, inject } from '@angular/core';
import { AppService } from './app.service';
import { ButtonDeleteComponent } from './button.component';

@Component({
  selector: 'app-root',
  imports: [ButtonDeleteComponent],
  template: `
    @for (info of allInfo(); track info.id) {
      <div>{{ info.id }} - {{ info.topic }}</div>
    }

    <button-delete-topic topic="food">Delete Food</button-delete-topic>
    <button-delete-topic topic="sport">Delete Sport</button-delete-topic>
    <button-delete-topic topic="book">Delete Book</button-delete-topic>
  `,
})
export class AppComponent {
  private service = inject(AppService);

  allInfo = this.service.getAllInfo;

  /* 
  User Story
  We need a button for each Topic. When we click on it, we delete all objects with this Topic in our database (Fake DB in our case). Finally, we display All [topic] have been deleted if everything was deleted successfully or Error: deletion of some [topic] failed if some deletions failed

  Constraints
  We can only pass one object to our DB for deletion at the time. The DB will respond true if the data was successfully deleted and false otherwise.

  Statement
  The QA team reports a bug. The UI shows All [topic] have been deleted all the time, even if some deletions fail.

  Spot the bug and correct it.
  
  */
}
