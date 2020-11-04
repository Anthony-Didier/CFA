import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  displayedColumns: string[] = ["nom", "prenom", "delete"];

  constructor(private userService: UserService) {
      this.userService.findAll().subscribe(data => {
          this.users = data;
          console.log(this.users);
      });
   }

  supprimer(id:number) {
      this.userService.delete(id).then(() => {
          this.users = this.users.filter(user => user.id!=id);
      });
  }

  ngOnInit(): void {
  }

}
