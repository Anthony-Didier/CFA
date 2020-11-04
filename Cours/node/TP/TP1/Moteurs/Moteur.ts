export class Moteur {

    private vitesse : number;
    private kilometrage : number;

    constructor(vitesse: number, kilometrage : number) {
        this.vitesse = vitesse;
        this.kilometrage = kilometrage;
    }

    getVitesse = () => {
        return this.vitesse;
    }

    getKilometrage = () => {
        return this.kilometrage;
    }

    setVitesse = (vitesse: number) => {
        this.vitesse = vitesse;
    }

    setKilometrage = (kilometrage: number) => {
        this.kilometrage = kilometrage;
    }
}