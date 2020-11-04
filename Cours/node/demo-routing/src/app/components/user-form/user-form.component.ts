import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private userService: UserService,
    private router: Router
    ) { 
    this.userForm = this.formBuilder.group({
      nom:[''],
      prenom:['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    
    this.userService.save(this.userForm.value).subscribe(()=>{
      this.router.navigate(['/user'])
    });
  }

}