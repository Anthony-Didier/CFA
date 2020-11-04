import { Moteur } from "../Moteurs/Moteur";

export class Vehicule {

    private marque: string;
    private couleur: string;
    private prix: number;
    private moteur: Moteur;

    constructor(marque: string, couleur: string, prix: number, moteur: Moteur) {
        this.marque = marque;
        this.couleur = couleur;
        this.prix = prix;
        this.moteur = moteur;
    }

    getMarque = () => {
        return this.marque;
    }

    getCouleur = () => {
        return this.couleur;
    }

    getPrix = () => {
        return this.prix;
    }

    getMoteur = () => {
        return this.moteur;
    }

    setMarque = (marque: string) => {
        this.marque = marque;
    }

    setCouleur = (couleur: string) => {
        this.couleur = couleur;
    }

    setPrix = (prix: number) => {
        this.prix = prix;
    }

    setMoteur = (moteur: Moteur) => {
        this.moteur = moteur;
    }

}