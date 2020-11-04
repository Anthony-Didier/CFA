import { Moteur } from "../../Moteurs/Moteur";
import { Vehicule } from "../Vehicule";

export class Moto extends Vehicule {

    constructor(marque: string, couleur: string, prix: number, moteur: Moteur) {
        super(marque, couleur, prix, moteur)
    }
}