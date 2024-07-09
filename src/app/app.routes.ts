import { Routes } from '@angular/router';
import { LoginComponent } from './Components/Auth/login/login.component';
import { SignupComponent } from './Components/Auth/signup/signup.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

export const routes: Routes = [
    {path: 'login', component:LoginComponent},
    {path: 'signup', component:SignupComponent},
    {path:'',redirectTo:"login",pathMatch:"full"},
    {path: '**', component:NotfoundComponent}
    
];
