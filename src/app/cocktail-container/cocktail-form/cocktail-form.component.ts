import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Cocktail } from 'src/app/shared/interfaces/coctail.interface';
import { CocktailService } from 'src/app/shared/interfaces/services/cocktail.service';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.css']
})
export class CocktailFormComponent implements OnInit {
  cocktailform!: FormGroup;

  public cocktail?: Cocktail
  private activatedroute?: ActivatedRoute


  constructor(private fb: FormBuilder, private cocktailservice: CocktailService, private router: Router) { }

  ngOnInit(): void {
    let index = this.activatedroute?.snapshot.params['index'];
    
      if (index !== null) {
         this.cocktailservice.getcocktail(parseInt(index)).subscribe((cocktail:Cocktail)=>{
          this.cocktail=cocktail
         })
         this.initform(this.cocktail)
      } else {
        this.initform()
      }

    



  }
  private initform(cocktail: Cocktail={ name: '', img: '', description: '', ingredients: [] }): void {
    this.cocktailform = this.fb.group({
      name: [cocktail.name, Validators.required],
      img: [cocktail.img, Validators.required],
      description: [cocktail.description, Validators.required],
      ingredients: this.fb.array(cocktail?.ingredients.map((ingredients) =>
        this.fb.group({
          name: [ingredients.name,Validators.required],
          quantity: [ingredients.quantity,Validators.required]
        })), Validators.required)
    })
  }
  public addIngredient(): void {
    this.ingredients.push(this.fb.group({
      name: ['', Validators.required],
      quantity: [0, Validators.required],
    }))

  }
  public confirmer(): void {
    console.log(this.cocktailform);
    if (this.cocktail) {
      this.cocktailservice.editcocktail(this.cocktailform.value)
    } else {
      this.cocktailservice.addcocktail(this.cocktailform.value).subscribe()
    }

    this.router.navigate(['/'], { relativeTo: this.activatedroute })
  }
  public get ingredients() {
    return this.cocktailform.get('ingredients') as FormArray
  }

}
