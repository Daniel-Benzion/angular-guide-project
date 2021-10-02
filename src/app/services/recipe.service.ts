import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is just a test", "https://vilas.extension.wisc.edu/files/2013/12/Recipes-Title.png"),
    new Recipe("Test Recipe 2", "This is also a test", "https://vilas.extension.wisc.edu/files/2013/12/Recipes-Title.png")
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
