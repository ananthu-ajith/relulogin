import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserdetailsService } from '../../../Services/userdetails.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,RouterOutlet,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private route:Router,private auth:UserdetailsService){}

  register(regForm:NgForm){
    console.log(regForm.value);
    this.auth.registerUser(regForm.value.email,regForm.value.password)
  }

  reset(regForm:NgForm){
    regForm.reset()
    
  }

}
