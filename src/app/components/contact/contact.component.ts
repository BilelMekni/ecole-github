import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm:FormGroup;
  id:any;
 

  constructor(private contactServcie:ContactService , private formBuilder : FormBuilder , private router : Router) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      nomPrenom:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
      email:["",[Validators.required , Validators.email]],
      titre:["",[Validators.required ,Validators.minLength(3), Validators.maxLength(40)]],
      message:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(300)]],

    })
  }

  ///****add contact/***** */ */
  envoyerMessage(){
 
  this.contactServcie.addContactHom(this.contactForm.value).subscribe(
    (response)=>{
      console.log("here contact in home" ,response);
      
    }
  )
  Swal.fire({
    title: 'votre demande a ete bien success',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
  this.router.navigate([""]);
}

 
  
 }
    
  



