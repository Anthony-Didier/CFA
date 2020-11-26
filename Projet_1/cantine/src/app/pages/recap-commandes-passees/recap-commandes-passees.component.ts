import { Component, OnInit } from '@angular/core';
import { CantiniereServiceService } from '../../../service/cantiniere-service.service';
import { CommandeRecap } from '../../models/CommandeRecap';

@Component({
  selector: 'app-recap-commandes-passees',
  templateUrl: './recap-commandes-passees.component.html',
  styleUrls: ['./recap-commandes-passees.component.css']
})
export class RecapCommandesPasseesComponent implements OnInit {
    title = 'angular-cantinere';
    commandes_passees: CommandeRecap[] = [];

  constructor(private cantiniere_api : CantiniereServiceService) {
    this.cantiniere_api.findAll().subscribe(data => {
      this.commandes_passees = data;
      console.log(this.commandes_passees);
    })
  }

  ngOnInit(): void {
  }

}
