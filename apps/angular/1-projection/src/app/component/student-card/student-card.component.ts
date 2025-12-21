import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import {
  FakeHttpService,
  randStudent,
} from '../../data-access/fake-http.service';
import { StudentStore } from '../../data-access/student.store';
import { CardComponent } from '../../ui/card/card.component';
import { HeaderTemplateDirective } from '../../ui/card/headerTemplate.directive';
import { ItemTemplateDirective } from '../../ui/card/itemTemplate.directive';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-student-card',
  template: `
    <app-card
      [list]="students()"
      (addNewClicked)="addStudent()"
      customBackgroundColor="rgba(0, 250, 0, 0.1)">
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  private store = inject(StudentStore);

  students = this.store.students;

  ngOnInit(): void {
    this.http.fetchStudents$.subscribe((s) => this.store.addAll(s));
  }

  addStudent() {
    this.store.addOne(randStudent());
  }

  deleteItem(id: number) {
    this.store.deleteOne(id);
  }
}
