import { NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FakeHttpService,
  randTeacher,
} from '../../data-access/fake-http.service';
import { TeacherStore } from '../../data-access/teacher.store';
import { CardType } from '../../model/card.model';
import { CardComponent } from '../../ui/card/card.component';
import { HeaderTemplateDirective } from '../../ui/card/headerTemplate.directive';
import { ItemTemplateDirective } from '../../ui/card/itemTemplate.directive';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-teacher-card',
  template: `
    <app-card
      [list]="teachers()"
      (addNewClicked)="addTeacher()"
      customBackgroundColor="rgba(250, 0, 0, 0.1)">
      <ng-template appHeaderTemplate>
        <img ngSrc="assets/img/teacher.png" width="200" height="200" />
      </ng-template>
      <ng-template appItemTemplate let-item="item">
        <app-list-item
          [id]="item.id"
          [name]="item.firstName + ' ' + item.lastName"
          (deleteClicked)="deleteItem($event)"></app-list-item>
      </ng-template>
    </app-card>
  `,
  imports: [
    CardComponent,
    HeaderTemplateDirective,
    NgOptimizedImage,
    ListItemComponent,
    ItemTemplateDirective,
  ],
})
export class TeacherCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  private store = inject(TeacherStore);
  private teacherStore = inject(TeacherStore);

  teachers = this.store.teachers;
  cardType = CardType.TEACHER;

  ngOnInit(): void {
    this.http.fetchTeachers$.subscribe((t) => this.store.addAll(t));
  }

  addTeacher() {
    this.teacherStore.addOne(randTeacher());
  }

  deleteItem(id: number) {
    this.teacherStore.deleteOne(id);
  }
}
