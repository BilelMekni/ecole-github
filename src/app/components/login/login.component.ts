import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ElevesService } from 'src/app/services/eleves.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  errorMsg: any;

  constructor(private formBuilder : FormBuilder , private router : Router , private eleveServcie : ElevesService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email : ["",[Validators.required , Validators.email]],
      password : ["",[Validators.required , Validators.minLength(8) , Validators.maxLength(12)]],
    })
   
  }
   //***partie login/**** */ */
   login(){
    this.eleveServcie.login(this.loginForm.value).subscribe(
      (response) => {
        console.log("Here response after login ", response);
        if (response.msg != "2") {
          // message error
          this.errorMsg = "Please check Email/Pwd";
        } else {
          // localStorage.setItem("connectedId")
          localStorage.setItem("connectedUser",response.user.id);
          if (response.user.role == "user") {
            this.router.navigate([""]);
          } else {
            this.router.navigate([""]);
          }
        }

      }
    );
      
   }

   ///***bouton lien pour creer compte eleve */
   compteEleves(){
    this.router.navigate(["signupStudents"]);
    Swal.fire('Bienvenue Pour Creer Un Compte')
   }

}
