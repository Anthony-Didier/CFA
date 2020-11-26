import { Component, OnInit } from '@angular/core';
import { CantiniereServiceService } from '../../../service/cantiniere-service.service';
import { Commande } from '../../../app/commande';
import { CommandeRecap } from '../../../app/commande_recap';

@Component({
  selector: 'app-recap-commande',
  templateUrl: './recap-commande.component.html',
  styleUrls: ['./recap-commande.component.css']
})
export class RecapCommandeComponent implements OnInit {
  title = 'angular-cantinere';
  commandes = [
    new CommandeRecap(1, 0, 13, "12/07/2020", "11:04:02" ,['Sandwich poulet'])
];

  constructor(private cantiniere_api : CantiniereServiceService) { }

  ngOnInit(): void {
    console.log(this.commandes);
    
  }

//  async getMenu(id_menu) {
//    const response = await this.cantiniere_api.getMenu(id_menu);
//    id_menu = 1;
//    this.listeMenus = response;
//    this.getImageMenu(id_menu);
//  }
//
//  async getImageMenu(id_menu) {
//    const response = await this.cantiniere_api.getImageMenu(id_menu);
//    this.listeMenus.forEach(element => {
//      if(element.imageId === response.id){
//        element.img = response.image64;
//      }
//    });
//    console.log(this.listeMenus);
//  
//  }

}
