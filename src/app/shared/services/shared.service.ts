import { CurrencyPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private currencyPipe : CurrencyPipe

  ) { }

  public transformAmountInput(value: string) {
    let valueFilter =  value.replace(/[^0-9 ]/g, '');
    return this.transformAmount(valueFilter);
  }

  public transformAmount(number : number | string) {
    return this.currencyPipe.transform(number, 'USD', 'symbol-narrow', '1.0-2');
  }
}
