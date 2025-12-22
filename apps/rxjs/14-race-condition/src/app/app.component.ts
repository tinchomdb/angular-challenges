import { Component, inject, OnInit, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { TopicModalComponent } from './topic-dialog.component';
import { TopicService, TopicType } from './topic.service';

@Component({
  selector: 'app-root',
  template: `
    @if (topics().length > 0) {
      <button (click)="openTopicModal()">Open Topic</button>
    }
  `,
})
export class AppComponent implements OnInit {
  title = 'rxjs-race-condition';
  dialog = inject(MatDialog);
  topicService = inject(TopicService);
  topics = signal<TopicType[]>([]);

  ngOnInit(): void {
    this.topicService
      .fakeGetHttpTopic()
      .pipe(take(1))
      .subscribe((topics) => {
        this.topics.set(topics);
      });
  }

  openTopicModal() {
    this.dialog.open(TopicModalComponent, {
      data: {
        topics: this.topics(),
      },
    });
  }
}
