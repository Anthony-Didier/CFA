export class User {
    nom: string;
    prenom: string;
    age: number;
    adresse: Adresse;
    chats: string[];
}

export class Adresse {
    numero: number;
    rue: string;
    ville: string;
}