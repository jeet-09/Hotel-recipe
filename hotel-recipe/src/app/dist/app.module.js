"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var alert_component_1 = require("./shared/alert/alert.component");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var shopping_list_service_1 = require("./shopping-list/shopping-list.service");
var app_routing_module_1 = require("./app-routing.module");
var recipe_service_1 = require("./recipes/recipe.service");
var http_1 = require("@angular/common/http");
var auth_component_1 = require("./auth/auth.component");
var auth_intercetor_serivce_1 = require("./auth/auth-intercetor.serivce");
var recipes_module_1 = require("./recipes/recipes.module");
var shopping_list_module_1 = require("./shopping-list/shopping-list.module");
var shared_module_1 = require("./shared/shared.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                auth_component_1.AuthComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                recipes_module_1.RecipesModule,
                shopping_list_module_1.ShoppingListModule,
                shared_module_1.SharedModule
            ],
            providers: [shopping_list_service_1.ShoppingListService, recipe_service_1.RecipeService, { provide: http_1.HTTP_INTERCEPTORS, useClass: auth_intercetor_serivce_1.AuthIntercetorService, multi: true }],
            bootstrap: [app_component_1.AppComponent],
            entryComponents: [
                alert_component_1.AlertComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
