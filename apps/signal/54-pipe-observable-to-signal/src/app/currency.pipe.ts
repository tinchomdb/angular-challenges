import { inject, Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from './currency.service';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  currencyService = inject(CurrencyService);

  /*   transform(price: number): Observable<string> {
    return this.currencyService.symbol$.pipe(map((s) => `${price}${s}`));
  }
 */
  transform(price: number): string {
    let symbol = this.currencyService.symbol();
    return `${price}${symbol}`;
  }
}
