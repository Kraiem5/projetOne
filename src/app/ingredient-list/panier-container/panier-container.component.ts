import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/interfaces/ingredient.interface';
import { PanierService } from 'src/app/shared/interfaces/services/panier.service';

@Component({
  selector: 'app-panier-container',
  templateUrl: './panier-container.component.html',
  styleUrls: ['./panier-container.component.css']
})
export class PanierContainerComponent implements OnInit,OnDestroy {
  public ingredients ?: Ingredient[];
  public subscription? : Subscription
  constructor(private panierservice:PanierService) { }

  ngOnInit(): void {
    this.subscription=this.panierservice.ingredients$.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients
      }
    )
  }
  ngOnDestroy(): void {
      this.subscription?.unsubscribe
  }

}
