import { Moteur } from "../Moteur";

export class MoteurDiesel extends Moteur {

    constructor(vitesse: number, km: number) {
        super(vitesse, km);
    }
}