import { Voiture } from "./Véhicules/Voiture/Voiture";
import { Moteur } from "./Moteurs/Moteur";

let m = new Moteur(180, 39000);

let v = new Voiture("Citroën", "grise", 12000, m);

console.log(v);
console.log(`La voiture est une ${v.getMarque()} ${v.getCouleur()} d'une valeur de ${v.getPrix()} €\nMoteur :\n     - Vitesse : ${m.getVitesse()} km/h\n     - Kilométrage : ${m.getKilometrage()} km`);

//export class Moteur {
//
//    constructor(
//        private _vitesse: number, 
//        private _kilometrage: number){}
//
//    public get vitesse():number {
//        return this._vitesse;
//    }
//
//    public get kilometrage():number {
//        return this._kilometrage;
//    }
//
//    
//    public set kilometrage(v : number) {
//        if (v>this._kilometrage){
//            this._kilometrage = v;
//        } else {
//            console.warn("!!! Tricheur !!!")
//        }
//    }
//    
//
//    public info():void{
//        console.log(`Vitesse: ${this.vitesse} \nKilometrage: ${this.kilometrage}`);
//    }
//
//    public ajouterKm(km:number): number{
//        this.kilometrage += km;
//        return this.kilometrage;
//    }
//}
//
//// let moteur: Moteur = new Moteur(100, 0);
//// console.log(moteur)
//// console.log(moteur.vitesse)
//
//// let moteur2 = new Moteur(200, 0);
//// moteur2.ajouterKm(1000);
//// moteur2.kilometrage = 100000
//// moteur2.info();