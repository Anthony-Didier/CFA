import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  profileForm : FormGroup;

  constructor(private formBuilder : FormBuilder) {
      this.profileForm = this.formBuilder.group({
          nom : [""],
          prenom : [""],
          adresse : this.formBuilder.group({
              rue : [""],
              numero : [""],
              codePostal : [""]
          })
      });
   }

  ngOnInit(): void {
  }
  
  onSubmit() {
      console.log(this.profileForm.value);
  }

}
