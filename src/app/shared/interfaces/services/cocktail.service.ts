import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../coctail.interface';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public cocktails$:BehaviorSubject<Cocktail[]>=new BehaviorSubject([
    {
      name: 'mojito',
      img: 'https://foodal.com/wp-content/uploads/2016/06/mint-limeade.jpg',
      description: 'Simply mix Honest Mint Limeade (or a combination of your favorite pre-made mint tea and limeade – maybe even give the frozen variety a try!) and rum, and serve over ice.',
      ingredients: [
        { name: "Cranberry", quantity: 1 },
        { name: "Citron", quantity: 1 },
        { name: "Vodka", quantity: 1 },
      ]
    },
    {
      name: 'kiwi',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuA8IcI-RHYU4iMGvMyIHlETJtaEXK-B3gi1R7KJs7AA&s',
      description: "Le kiwi, ce petit fruit velu et tout vert ou parfois jaune est une source de vitamine C et d'énergie . Alors pourquoi s'en passer surtout qu'il permet de réaliser de délicieuses recettes de l'entrée au dessert. C'est le moment de mettre de la couleur dans vos assiettes !",
      ingredients: [
        { name: "Rhum", quantity: 1 },
        { name: "Triple sec", quantity: 1 },
        { name: "Citron", quantity: 1 },
      ]
    },
    {
      name: 'fraise',
      img: 'https://deluxe.tn/wp-content/uploads/2020/04/Deluxe_jus_fraise.jpg',
      description: 'Les fraises se développent à partir du réceptacle charnu des fleurs. Ce sont donc des faux fruits. De forme ovoïde oblongues plus ou moins arrondies, elles sont de couleur rouge ou jaune blanchâtre selon les variétés.',
      ingredients: [
        { name: "Perrier", quantity: 1 },
        { name: "Rhum", quantity: 1 },
        { name: "Menthe", quantity: 1 },
      ]
    }
  ]);
  public selectedcocktail$:BehaviorSubject<Cocktail>=new BehaviorSubject(this.cocktails$.value[0]);
  public selectCocktail(index: number): void {
    this.selectedcocktail$.next(this.cocktails$.value[index]) 
  }
  constructor() { 
    
    
  }
}
