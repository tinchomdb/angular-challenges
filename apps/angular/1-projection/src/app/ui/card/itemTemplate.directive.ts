import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appItemTemplate]',
})
export class ItemTemplateDirective {
  template = inject(TemplateRef);
}
