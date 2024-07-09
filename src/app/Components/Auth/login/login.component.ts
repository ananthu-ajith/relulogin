import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserdetailsService } from '../../../Services/userdetails.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,RouterLink,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private route:Router,private auth:UserdetailsService){}


  email=new FormControl("",[
    Validators.required,
    Validators.email
  ])

  password = new FormControl("",[
    Validators.required,
    Validators.minLength(6)
  ])


  loginForm = new FormGroup({
    email:this.email,
    password: this.password
  })


  login(){
    this.auth.loginUser(this.loginForm.value.email!,this.loginForm.value.password!)
    
  }

  reset()
  {
    this.loginForm.reset()
  }

}
