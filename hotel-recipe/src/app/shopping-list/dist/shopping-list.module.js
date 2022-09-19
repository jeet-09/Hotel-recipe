"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShoppingListModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var shared_module_1 = require("../shared/shared.module");
var shopping_edit_component_1 = require("./shopping-edit/shopping-edit.component");
var shopping_list_component_1 = require("./shopping-list.component");
var ShoppingListModule = /** @class */ (function () {
    function ShoppingListModule() {
    }
    ShoppingListModule = __decorate([
        core_1.NgModule({
            declarations: [shopping_list_component_1.ShoppingListComponent, shopping_edit_component_1.ShoppingEditComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild([
                    { path: 'shopping-list', component: shopping_list_component_1.ShoppingListComponent },
                ]),
                shared_module_1.SharedModule
            ]
        })
    ], ShoppingListModule);
    return ShoppingListModule;
}());
exports.ShoppingListModule = ShoppingListModule;
