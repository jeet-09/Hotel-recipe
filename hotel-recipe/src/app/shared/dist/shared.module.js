"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var alert_component_1 = require("./alert/alert.component");
var dropdown_directive_1 = require("./dropdown.directive");
var loading_spinner_component_1 = require("./loading-spinner-component");
var placeholder_directive_1 = require("./placeHolder/placeholder.directive");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                alert_component_1.AlertComponent,
                loading_spinner_component_1.LoadingSpinnerComponent,
                placeholder_directive_1.PlaceHolderDirective,
                dropdown_directive_1.DropdownDirective
            ],
            imports: [
                common_1.CommonModule
            ],
            exports: [
                alert_component_1.AlertComponent,
                loading_spinner_component_1.LoadingSpinnerComponent,
                placeholder_directive_1.PlaceHolderDirective,
                dropdown_directive_1.DropdownDirective,
                common_1.CommonModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
