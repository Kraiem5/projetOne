//modules
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http'
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
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './shared/interfaces/pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CocktailContainerComponent,
    CoctailDetailsComponent,
    CoctailListComponent,
    IngredientListComponent,
    PanierContainerComponent,
    CocktailFormComponent,
    FilterPipe,
    
  ],

  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(app_routes)
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
