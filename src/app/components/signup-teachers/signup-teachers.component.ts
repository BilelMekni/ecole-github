import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from './../../validators/mustMatch';
import { TeachersService } from 'src/app/services/teachers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-teachers',
  templateUrl: './signup-teachers.component.html',
  styleUrls: ['./signup-teachers.component.css']
})
export class SignupTeachersComponent implements OnInit {
  signupForm : FormGroup;
  imagePreview: any;
  path : string;

  constructor(private formBuilder : FormBuilder , private router : Router , private teacherService : TeachersService) { }

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName:["",[Validators.required , Validators.maxLength(20), Validators.minLength(3)]],
      lastName:["",[Validators.required , Validators.maxLength(20), Validators.minLength(3)]],
      email:["",[Validators.required , Validators.email]],
      telephone:["",[Validators.required , Validators.maxLength(8), Validators.minLength(8)]],
      adresse:["",[Validators.required , Validators.maxLength(50), Validators.minLength(3)]],
      experience:["",[Validators.required , Validators.maxLength(10),Validators.minLength(3)]],
      matricule:["",[Validators.required , Validators.maxLength(10) , Validators.minLength(3)]],
      password:["",[Validators.required , Validators.maxLength(50), Validators.minLength(8)]],
      confPassword:[""],
      section:[""],
      gender:[""],
      img:[""],


    },{
      validators:MustMatch("password","confPassword")

    }
    )
  }
  ///**** Signup///**** */ */
signup(){
  let teachers = this.signupForm.value;
  teachers.role = "teachers";
  console.log("here object",this.signupForm.value);
  let role = (this.path == "/signupTeachers")? "teachers":"students";
  this.signupForm.value.role = role;
  this.teacherService.signup(this.signupForm.value,this.signupForm.value.img).subscribe(
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


//***conf image *///*/
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
