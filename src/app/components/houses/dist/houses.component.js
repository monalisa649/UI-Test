"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HousesComponent = void 0;
var core_1 = require("@angular/core");
var HousesComponent = /** @class */ (function () {
    function HousesComponent(_potterService, route, router) {
        this._potterService = _potterService;
        this.route = route;
        this.router = router;
        // Variable for filterpipe
        this.filterCharacters = '';
        //Array of images
        this.imgHouse = [
            "assets/img/pexels-photo.jpeg",
            "assets/img/pexels-photo2.jpeg",
            "assets/img/pexels-photo3.jpeg",
            "assets/img/mont-saint.jpg"
        ];
    }
    HousesComponent.prototype.ngOnInit = function () {
        //Method for subscribe
        this.getHouses();
    };
    HousesComponent.prototype.getHouses = function () {
        var _this = this;
        this._potterService.getHouses().subscribe(function (houses) {
            _this.house = houses;
            console.log(_this.house);
        });
        (function (error) {
            console.log(error);
        });
    };
    HousesComponent.prototype.verHouse = function (house) {
        this.houseId = house._id;
        console.log(this.houseId);
        this.router.navigate(['/house', this.houseId]);
    };
    HousesComponent = __decorate([
        core_1.Component({
            selector: 'app-houses',
            templateUrl: './houses.component.html',
            styleUrls: ['./houses.component.sass']
        })
    ], HousesComponent);
    return HousesComponent;
}());
exports.HousesComponent = HousesComponent;
