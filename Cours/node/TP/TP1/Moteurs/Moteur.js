"use strict";
exports.__esModule = true;
exports.Moteur = void 0;
var Moteur = /** @class */ (function () {
    function Moteur(vitesse, kilometrage) {
        var _this = this;
        this.getVitesse = function () {
            return _this.vitesse;
        };
        this.getKilometrage = function () {
            return _this.kilometrage;
        };
        this.setVitesse = function (vitesse) {
            _this.vitesse = vitesse;
        };
        this.setKilometrage = function (kilometrage) {
            _this.kilometrage = kilometrage;
        };
        this.vitesse = vitesse;
        this.kilometrage = kilometrage;
    }
    return Moteur;
}());
exports.Moteur = Moteur;
