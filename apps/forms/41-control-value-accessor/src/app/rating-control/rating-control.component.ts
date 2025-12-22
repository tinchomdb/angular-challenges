import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating-control',
  templateUrl: 'rating-control.component.html',
  styleUrls: ['rating-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RatingControlComponent,
    },
  ],
})
export class RatingControlComponent implements ControlValueAccessor {
  value: number | null = null;

  _onChange = (_: any) => {};
  _onTouched = () => {};

  setRating(index: number): void {
    this.value = index + 1;
    this._onChange(this.value);
    this._onTouched();
  }

  isStarActive(index: number, value: number | null): boolean {
    return value ? index < value : false;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
}
