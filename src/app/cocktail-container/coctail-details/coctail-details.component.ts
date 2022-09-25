import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cocktail } from 'src/app/shared/interfaces/coctail.interface';
import { CocktailService } from 'src/app/shared/interfaces/services/cocktail.service';
import { PanierService } from 'src/app/shared/interfaces/services/panier.service';

@Component({
  selector: 'app-coctail-details',
  templateUrl: './coctail-details.component.html',
  styleUrls: ['./coctail-details.component.css']
})
export class CoctailDetailsComponent implements OnInit {
  @Input() public cocktail?: any



  constructor(private panierservice: PanierService,) { }

  ngOnInit(): void {
    //  this.activatedrouter.paramMap.subscribe((parammap:ParamMap)=>{
    //   this.index=parammap.get('index');
    //   console.log(this.index);

    //    this.cocktail= this.cocktailservice.getcocktail(this.index)
    //})
  }
  public add() {
    console.log(this.cocktail)
    this.panierservice.addToPanier(this.cocktail.ingredients)
  }

}
