"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RecipeService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var RecipeService = /** @class */ (function () {
    function RecipeService(slsService) {
        this.slsService = slsService;
        this.recipeChanged = new rxjs_1.Subject();
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
        this.recipes = [];
    }
    RecipeService.prototype.setRecipes = function (recipes) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.getRecipe = function (index) {
        return this.recipes[index];
    };
    RecipeService.prototype.addIngredientsToShoppingList = function (ingredients) {
        this.slsService.addIngredients(ingredients);
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.updateRecipe = function (index, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.deleteRecipe = function (index) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    };
    RecipeService = __decorate([
        core_1.Injectable()
    ], RecipeService);
    return RecipeService;
}());
exports.RecipeService = RecipeService;
