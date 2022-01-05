import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycurrency'
})
export class MycurrencyPipe implements PipeTransform {

  transform(value: number, currency : string): string {
    
    if(currency == "EUR") return value + "€"
    if(currency == "USD") return value + "$"
    throw Error("Currency incorrect")

  }

}
