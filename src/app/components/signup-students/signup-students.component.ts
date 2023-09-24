import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ElevesService } from 'src/app/services/eleves.service';
import { MustMatch } from 'src/app/validators/mustMatch';
import Swal from 'sweetalert2/dist/sweetalert2.js'



@Component({
  selector: 'app-signup-students',
  templateUrl: './signup-students.component.html',
  styleUrls: ['./signup-students.component.css']
})
export class SignupStudentsComponent implements OnInit {
  signupForm:FormGroup;
  imagePreview: any;
 path : string;
  constructor(private formBuilder : FormBuilder , private router : Router , private elevesServices : ElevesService) { }

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group(
      {
        firstName:["",[Validators.required , Validators.maxLength(20) , Validators.minLength(3)]],
        lastName:["",[Validators.required , Validators.maxLength(20), Validators.minLength(3)]],
        email:["",[Validators.required , Validators.email]],
        telephone:["",[Validators.required , Validators.maxLength(8), Validators.minLength(8)]],
        date:["",[Validators.required]],
        adresse:["",[Validators.required , Validators.maxLength(50), Validators.minLength(3)]],
        password:["",[Validators.required , Validators.maxLength(50) , Validators.minLength(8)]],
        confPassword:[""],
        section:[""],
        niveau:[""],
        gender:[""],
        img:[""],
      },{
        validators:MustMatch("password","confPassword")
      }


      
    )

  }

///**** Signup///**** */ */
signup(){
  let eleves = this.signupForm.value;
  eleves.role = "students";
  eleves.status = "not confirmed";
  console.log("here object",this.signupForm.value);
  let role = (this.path == "/signupStudents")? "students":"teacher";
  this.signupForm.value.role = role;
  this.elevesServices.signup(this.signupForm.value,this.signupForm.value.img).subscribe(
    (response)=>{
      console.log("here after signup",response);
      
    }
  );
  Swal.fire(
    'Bienvenue',
    'Votre Inscription A bien Success',
    'question'
  ) 
 
}

/**//*****/// Login*** */
login(){
  this.router.navigate(["login"]);
  Swal.fire({
    title: 'Bonjour,Voulez Voir Page Login',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
}





  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  
  }

}
