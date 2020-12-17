import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CantiniereService } from '../../../service/cantiniere.service';
import { Commande } from '../../models/Commande';
import { User } from '../../models/User';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

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
    private route: ActivatedRoute, 
    private dialog: MatDialog
  ) {
    this.userId = this.route.snapshot.paramMap.get("id");
    this.cantiniere_api.findAllbyUser(this.userId).subscribe((data) => {
      this.commandes = data;
      console.log(this.commandes);
    });
  }

  cancelOrder(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: "Annulation de la commande",
        message: "Confirmer l'annulation de la commande n°" + id + " ?"
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'confirm') {
        this.cantiniere_api.cancel(id).subscribe(() => window.location.reload());
        // console.log("Commande n°" + id + " annulée !");
      }
    });
  }

  ngOnInit(): void {}
}
