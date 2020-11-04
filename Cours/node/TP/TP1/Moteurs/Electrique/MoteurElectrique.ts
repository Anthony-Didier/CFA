import { Moteur } from "../Moteur";

export class MoteurElectrique extends Moteur {

    constructor(vitesse: number, km: number) {
        super(vitesse, km);
    }
}