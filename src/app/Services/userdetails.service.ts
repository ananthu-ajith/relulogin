import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { errorMonitor } from 'events';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor( private route:Router) { }

  registerUser(email:string,password:string){

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    console.log(user);
    
    this.route.navigate([''])
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
    if (errorCode=="auth/email-already-in-use") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email already registered",
      });  
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong",
      }); 
    }
    console.log(errorCode);
        // ..
  });
  }

  loginUser(email:string,password:string){

    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert('Successfully logged in')

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    if (errorCode=="auth/invalid-credential") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Credentials",
      });  
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong",
      }); 
    }


    // auth/invalid-credential
  });
  }

}
