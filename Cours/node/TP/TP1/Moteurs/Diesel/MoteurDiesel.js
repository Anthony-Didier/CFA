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
exports.MoteurDiesel = void 0;
var Moteur_1 = require("../Moteur");
var MoteurDiesel = /** @class */ (function (_super) {
    __extends(MoteurDiesel, _super);
    function MoteurDiesel(vitesse, km) {
        return _super.call(this, vitesse, km) || this;
    }
    return MoteurDiesel;
}(Moteur_1.Moteur));
exports.MoteurDiesel = MoteurDiesel;
