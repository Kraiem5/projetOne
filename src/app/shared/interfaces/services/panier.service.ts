import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../ingredient.interface';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  public ingredients$ : BehaviorSubject<Ingredient[]> = new BehaviorSubject(null);

  constructor() { }
  public addToPanier(ingredients: Ingredient): void {
    const currentValue = this.ingredients$.value;
      let p=currentValue.push(value)
      this.ingredients$.next(currentValue);
    }
   
    
  
}
