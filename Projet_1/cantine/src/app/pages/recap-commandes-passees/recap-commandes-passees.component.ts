import { Component, OnInit } from '@angular/core';
import { CantiniereService } from '../../../service/cantiniere.service';
import { Commande } from '../../models/Commande';

@Component({
  selector: 'app-recap-commandes-passees',
  templateUrl: './recap-commandes-passees.component.html',
  styleUrls: ['./recap-commandes-passees.component.css']
})
export class RecapCommandesPasseesComponent implements OnInit {
    title = 'angular-cantinere';
    commandes_passees: Commande[] = [];

  constructor(private cantiniere_api : CantiniereService) {
    this.cantiniere_api.findAll().subscribe(data => {
      this.commandes_passees = data;
      console.log(this.commandes_passees);
    })
  }

  cancelOrder(commandes_passees: Commande) {
    this.cantiniere_api.update(commandes_passees);
  }

  ngOnInit(): void {
  }

}
