import { Component, inject, input, signal } from '@angular/core';
import { take, tap } from 'rxjs';
import { AppService } from './app.service';
import { TopicType } from './localDB.service';

@Component({
  selector: 'button-delete-topic',
  template: `
    <button (click)="deleteTopic()"><ng-content /></button>
    <div>{{ message() }}</div>
  `,
})
export class ButtonDeleteComponent {
  readonly topic = input.required<TopicType>();

  message = signal('');

  private service = inject(AppService);

  deleteTopic() {
    this.service
      .deleteOldTopics(this.topic())

      .pipe(
        tap((value) => {
          console.log(value);
        }),
        take(1),
      )
      .subscribe((result) =>
        this.message.set(
          result
            ? `All ${this.topic()} have been deleted`
            : `Error: deletion of some ${this.topic()} failed`,
        ),
      );
  }
}
