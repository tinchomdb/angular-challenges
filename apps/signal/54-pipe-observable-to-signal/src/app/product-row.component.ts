import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  untracked,
} from '@angular/core';
import { CurrencyPipe } from './currency.pipe';
import { CurrencyService } from './currency.service';
import { Product } from './product.model';

@Component({
  selector: 'tr[product-row]',
  template: `
    <td>{{ productInfo.name }}</td>
    <td>{{ productInfo.priceA | currency }}</td>
    <td>{{ productInfo.priceB | currency }}</td>
    <td>{{ productInfo.priceC | currency }}</td>
  `,
  imports: [/* AsyncPipe, */ CurrencyPipe],
  providers: [CurrencyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductRowComponent {
  /* protected productInfo!: Product;

  @Input({ required: true }) set product(product: Product) {
    this.currencyService.updateCode(product.currencyCode);
    this.productInfo = product;
  }

  currencyService = inject(CurrencyService);
  */

  currencyService = inject(CurrencyService);

  protected productInfo!: Product;
  product = input.required<Product>();

  constructor() {
    effect(() => {
      const product = this.product();
      untracked(() => {
        this.currencyService.updateCode(product.currencyCode);
        this.productInfo = product;
      });
    });
  }
}
