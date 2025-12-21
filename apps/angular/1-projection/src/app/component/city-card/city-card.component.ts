import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CityStore } from '../../data-access/city.store';
import {
  FakeHttpService,
  randomCity,
} from '../../data-access/fake-http.service';
import { CardComponent } from '../../ui/card/card.component';
import { HeaderTemplateDirective } from '../../ui/card/headerTemplate.directive';
import { ItemTemplateDirective } from '../../ui/card/itemTemplate.directive';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-city-card',
  template: `
    <app-card
      [list]="cities()"
      (addNewClicked)="addCity()"
      customBackgroundColor="rgba(0, 0, 250, 0.1)">
      <ng-template appHeaderTemplate>
        <img ngSrc="assets/img/teacher.png" width="200" height="200" />
      </ng-template>
      <ng-template appItemTemplate let-item="item">
        <app-list-item
          [id]="item.id"
          [name]="item.name"
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
export class CityCardComponent implements OnInit {
  private http = inject(FakeHttpService);
  private store = inject(CityStore);

  cities = this.store.cities;

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((s) => this.store.addAll(s));
  }

  addCity() {
    this.store.addOne(randomCity());
  }

  deleteItem(id: number) {
    this.store.deleteOne(id);
  }
}
