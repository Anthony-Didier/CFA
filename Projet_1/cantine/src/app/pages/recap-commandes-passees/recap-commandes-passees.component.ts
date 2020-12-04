import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CantiniereService } from '../../../service/cantiniere.service';
import { Commande } from '../../models/Commande';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-recap-commandes-passees',
  templateUrl: './recap-commandes-passees.component.html',
  styleUrls: ['./recap-commandes-passees.component.css'],
})
export class RecapCommandesPasseesComponent implements OnInit {
  title = 'angular-cantinere';
  commandes_passees: Commande[] = [];

  constructor(private cantiniere_api: CantiniereService, private dialog: MatDialog) {
    this.cantiniere_api.findAll().subscribe((data) => {
      this.commandes_passees = data;
      console.log(this.commandes_passees);
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
