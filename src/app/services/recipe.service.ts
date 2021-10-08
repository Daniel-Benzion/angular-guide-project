import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService) { }

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Schnitzel", "This is the most German thing Max could have chosen", "https://therecipecritic.com/wp-content/uploads/2020/10/pork-schnitzel-recipe-3.jpg", [
      new Ingredient('Chicken', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe("Burger", "I would say thank god something American but Hamburg is in Germany sooooo...", "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg", [
      new Ingredient('Buns', 2),
      new Ingredient('Patties', 2),
      new Ingredient('Bacon', 2)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
