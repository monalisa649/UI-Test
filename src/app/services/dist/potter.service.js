"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PotterService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var PotterService = /** @class */ (function () {
    function PotterService(_http) {
        this._http = _http;
        this.key = environment_1.environment.apiKey;
        this.url = environment_1.environment.apiUrl;
    }
    PotterService.prototype.getHouses = function () {
        return this._http.get(this.url + "/houses/?key=" + this.key);
    };
    PotterService.prototype.getHouse = function (id) {
        return this._http.get(this.url + "/houses/" + id + "/?key=" + this.key);
    };
    PotterService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PotterService);
    return PotterService;
}());
exports.PotterService = PotterService;
