export class Commande {

    constructor (public id : number, public status : number, public iduser : number, public creation_date : string, public creation_time : string, public panier : Array<any>) {
        this.id = id;
        this.status = status;
        this.iduser = iduser;
        this.creation_date = creation_date;
        this.creation_time = creation_time;
        this.panier = [];
    }
}
