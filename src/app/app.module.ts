//modules
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
//component
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CoctailDetailsComponent } from './cocktail-container/coctail-details/coctail-details.component';
import { CoctailListComponent } from './cocktail-container/coctail-list/coctail-list.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { PanierContainerComponent } from './ingredient-list/panier-container/panier-container.component';
//routes
import { app_routes } from './app.routes';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CocktailContainerComponent,
    CoctailDetailsComponent,
    CoctailListComponent,
    IngredientListComponent,
    PanierContainerComponent,
    
  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot(app_routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
