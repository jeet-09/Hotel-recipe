import {Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

//  private recipes: Recipe[] = [
// new Recipe('Burger', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/10/16/09/01/hamburger-2856548_960_720.jpg', [
//  new Ingredient('Meat', 1),
//  new Ingredient('Extra Cheese Slice', 2),
//  new Ingredient('Crispy Patty', 1)
//]),
// new Recipe('Non Veg Pizza', 'This is simply a test', 'https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_960_720.jpg', [
//  new Ingredient('Extra Cheese Slice', 4),
//  new Ingredient('Meat Topping', 2)
//]),
 //];
   private recipes: Recipe[] = [];
   constructor(private slsService: ShoppingListService) {}

  setRecipes(recipes : Recipe[]){
   this.recipes = recipes;
   this.recipeChanged.next(this.recipes.slice());
 }

  getRecipes(){
  return this.recipes.slice();
 } 

  getRecipe(index: number){
  return this.recipes[index];
}

   addIngredientsToShoppingList(ingredients: Ingredient[]){
   this.slsService.addIngredients(ingredients);
 }

  addRecipe(recipe: Recipe){
   this.recipes.push(recipe);
   this.recipeChanged.next(this.recipes.slice());
 }
  updateRecipe(index: number, newRecipe: Recipe){
   this.recipes[index] = newRecipe;
   this.recipeChanged.next(this.recipes.slice());
 }
  deleteRecipe(index: number){
   this.recipes.splice(index, 1);
   this.recipeChanged.next(this.recipes.slice());
 }
}