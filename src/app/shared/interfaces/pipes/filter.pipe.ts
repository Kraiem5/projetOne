import { Pipe, PipeTransform } from '@angular/core';
import { Cocktail } from '../coctail.interface';
// import { Cocktail } from '../shared/interfaces/coctail.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Cocktail[], searsh: string): Cocktail[] {

    return value.filter((c)=>c.name.toLowerCase().includes(searsh.toLowerCase()));
  }

}
