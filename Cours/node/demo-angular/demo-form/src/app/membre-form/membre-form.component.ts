import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-membre-form',
  templateUrl: './membre-form.component.html',
  styleUrls: ['./membre-form.component.scss']
})
export class MembreFormComponent implements OnInit {

  membreForm : FormGroup;

  constructor(private formBuilder : FormBuilder) {
      this.membreForm = this.formBuilder.group({
          nom : ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32)])],
          membres : this.formBuilder.array([
              this.formBuilder.control("")
          ])
      });
  }

  get membres() {
      return this.membreForm.get("membres") as FormArray;
  }

  ngOnInit(): void {
  }

  ajouterMembre() {
      this.membres.push(this.formBuilder.control(`Membre n°${this.membres.length+1}`));
  }

  onSubmit() {
      if (this.membreForm.valid) {
          console.log(this.membreForm.value);
        } else {
            alert("Formulaire invalide !");
        }
  }

}
