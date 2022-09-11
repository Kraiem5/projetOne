import { Routes } from "@angular/router";
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";
import { PanierContainerComponent } from "./ingredient-list/panier-container/panier-container.component";

export const app_routes: Routes = [

    { path: '', redirectTo:'cocktails',pathMatch:'full'},
    { path: 'cocktails',component:CocktailContainerComponent },
    { path: 'panier',component:PanierContainerComponent }
]