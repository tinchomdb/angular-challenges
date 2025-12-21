import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, input, output } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { HeaderTemplateDirective } from './headerTemplate.directive';
import { ItemTemplateDirective } from './itemTemplate.directive';

@Component({
  selector: 'app-card',
  //The goal of the challenge is to create a CardComponent that can be customized without any modifications. Once you’ve created this component, you can begin implementing the CityCardComponent and ensure you are not touching the CardComponent.
  templateUrl: './card.component.html',
  imports: [ListItemComponent, NgTemplateOutlet, HeaderTemplateDirective],
})
export class CardComponent {
  readonly list = input<any[] | null>(null);
  readonly customBackgroundColor = input('');
  addNewClicked = output();

  headerTemplate = contentChild.required(HeaderTemplateDirective);

  listItemTemplate = contentChild.required(ItemTemplateDirective);

  addNewItem() {
    this.addNewClicked.emit();
  }
}
