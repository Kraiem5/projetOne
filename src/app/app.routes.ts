import { Routes } from "@angular/router";
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";
import { CocktailFormComponent } from "./cocktail-container/cocktail-form/cocktail-form.component";
import { CoctailDetailsComponent } from "./cocktail-container/coctail-details/coctail-details.component";
import { PanierContainerComponent } from "./ingredient-list/panier-container/panier-container.component";

export const app_routes: Routes = [

    { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
    {
        path: 'cocktails', component: CocktailContainerComponent , children : [
            {path:'new',component:CocktailFormComponent},
            {path:':index/edit',component:CocktailFormComponent},
            { path: ':index', component: CoctailDetailsComponent },
            {path:'',redirectTo :'0',pathMatch:'full'}
        ]},
    { path: 'panier', component: PanierContainerComponent }
]