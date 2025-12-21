import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appHeaderTemplate]',
})
export class HeaderTemplateDirective {
  template = inject(TemplateRef);
}
