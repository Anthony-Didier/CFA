"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Moto = void 0;
var Vehicule_1 = require("../Vehicule");
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marque, couleur, prix, moteur) {
        return _super.call(this, marque, couleur, prix, moteur) || this;
    }
    return Moto;
}(Vehicule_1.Vehicule));
exports.Moto = Moto;
