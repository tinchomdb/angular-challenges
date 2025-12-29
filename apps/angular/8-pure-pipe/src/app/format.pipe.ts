import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
})
export class Format implements PipeTransform {
  transform(person: string, index: number): string {
    return `${person} - ${index}`;
  }
}
