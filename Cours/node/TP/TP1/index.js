"use strict";
exports.__esModule = true;
var Voiture_1 = require("./V\u00E9hicules/Voiture/Voiture");
var Moteur_1 = require("./Moteurs/Moteur");
var m = new Moteur_1.Moteur(180, 39000);
var v = new Voiture_1.Voiture("Citroën", "grise", 12000, m);
console.log(v);
console.log("La voiture est une " + v.getMarque() + " " + v.getCouleur() + " d'une valeur de " + v.getPrix() + " \u20AC\nMoteur :\n     - Vitesse : " + m.getVitesse() + " km/h\n     - Kilom\u00E9trage : " + m.getKilometrage() + " km");
