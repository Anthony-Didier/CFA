import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CantiniereService } from '../../../service/cantiniere.service';
import { Commande } from '../../models/Commande';
import { User } from '../../models/User';

@Component({
  selector: 'app-recap-commande',
  templateUrl: './recap-commande.component.html',
  styleUrls: ['./recap-commande.component.css'],
})
export class RecapCommandeComponent implements OnInit {
  title = 'angular-cantinere';
  commandes: Commande[] = [];
  users: User[] = [];
  userId: any;

  constructor(
    private cantiniere_api: CantiniereService,
    private route: ActivatedRoute
  ) {
    this.userId = this.route.snapshot.paramMap.get("id");
    this.cantiniere_api.findAllbyUser(this.userId).subscribe((data) => {
      this.commandes = data;
      console.log(this.commandes);
    });
  }

  ngOnInit(): void {}
}
