import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  imgUrl = "/assets/scared_pumbaa.jpg";
  imgAlt = "Image depuis un property binding";

  nomDeLaListe:string = "Ma liste d'utilisateurs :";
  users = [
    {name : "Toto", sexe : "Homme"},
    {name : "Titi", sexe : "Femme"},
  ];

  message = "TOTO";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
      alert("Pumbaa vous dit bonjour !")
  }

  onMouseEnter(): void {
      console.log("Aaaaaaah !");
  }

}
