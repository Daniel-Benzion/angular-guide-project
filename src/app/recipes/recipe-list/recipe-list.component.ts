import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is just a test", "https://vilas.extension.wisc.edu/files/2013/12/Recipes-Title.png")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
