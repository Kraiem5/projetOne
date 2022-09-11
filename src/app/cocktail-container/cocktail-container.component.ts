import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cocktail } from '../shared/interfaces/coctail.interface';
import { CocktailService } from '../shared/interfaces/services/cocktail.service';
//import { Cocktail } from '../interfaces/cocktail.interface';
@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.css']
})
export class CocktailContainerComponent implements OnInit,OnDestroy {


  public cocktails: Cocktail[] = [];
  public selectedCocktails?: Cocktail;
  public subscription?: Subscription=new Subscription();
  constructor(private cocktailservice: CocktailService) { }

  ngOnInit(): void {
    this.subscription?.add(this.cocktailservice.cocktails$.subscribe((cocktails: Cocktail[]) => {
      this.cocktails = cocktails
    }));
    this.subscription?.add
      (this.cocktailservice.selectedcocktail$.subscribe(
        (selectCocktail: Cocktail) => {
          this.selectedCocktails = selectCocktail
        }))

  }
  ngOnDestroy(): void {
      this.subscription?.unsubscribe()
  }
  public selectCocktail(index: number): void {
    this.cocktailservice.selectCocktail(index);
  }

}
