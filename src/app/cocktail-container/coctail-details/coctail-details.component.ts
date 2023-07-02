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
  index?:any='0'


  constructor(private panierservice: PanierService,private activatedrouter:ActivatedRoute ) { }

  ngOnInit(): void {
     this.activatedrouter.paramMap.subscribe((parammap:ParamMap)=>{
      this.index=parammap.get('index');
      console.log(this.index);
      // this.activatedrouter.paramMap.subscribe((parammap:ParamMap)=>{
      
      //   const ind=parammap.get('index')
      
      
      // this.cocktailservice.getcocktail(parseInt('ind')).subscribe((cocktails:Cocktail)=>{
      //   this.cocktail=cocktails
      // });

      //  this.cocktail= this.cocktailservice.getcocktail(this.index)
    })
  }
  public add() {
    console.log(this.cocktail)
    this.panierservice.addToPanier(this.cocktail.ingredients)
  }

}
