"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HouseComponent = void 0;
var core_1 = require("@angular/core");
var HouseComponent = /** @class */ (function () {
    function HouseComponent(_potterService, activR) {
        var _this = this;
        this._potterService = _potterService;
        this.activR = activR;
        this.id_house = [];
        // Variable for filterpipe seacrh
        this.filterCharacters = '';
        //Take of parameter sent by url from houses page
        this.activR.params.subscribe(function (params) {
            _this.getHouse(params['id']);
        });
    }
    HouseComponent.prototype.ngOnInit = function () { };
    HouseComponent.prototype.getHouse = function (id) {
        var _this = this;
        this._potterService.getHouse(id).subscribe(function (data) {
            _this.house = data;
        });
    };
    HouseComponent = __decorate([
        core_1.Component({
            selector: 'app-house',
            templateUrl: './house.component.html',
            styleUrls: ['./house.component.sass']
        })
    ], HouseComponent);
    return HouseComponent;
}());
exports.HouseComponent = HouseComponent;
