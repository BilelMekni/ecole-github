import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursService } from 'src/app/services/cours.service';
import { TeachersService } from 'src/app/services/teachers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-cours',
  templateUrl: './ajouter-cours.component.html',
  styleUrls: ['./ajouter-cours.component.css']
})
export class AjouterCoursComponent implements OnInit {
  coursForm: FormGroup;
  imagePreview: any;
  coursPreview: any;
  path: string;
  id: any;
  cour : any;
  livre : any;
  


  constructor(private formBuilder : FormBuilder , private router: Router, private coursService : CoursService) { }

  ngOnInit() {

    
    this.coursForm = this.formBuilder.group(
      {
        titre:["",[Validators.required , Validators.maxLength(20), Validators.minLength(3)]],
        reference:["",[Validators.required , Validators.maxLength(10), Validators.minLength(5)]],
        section:["",[Validators.required , Validators.maxLength(20), Validators.minLength(3)]],
        cours:[""],
       
        
      }
    )
    ////////////
    this.id = localStorage.getItem("connectedUser")
    this.coursService.getCoursById(this.id).subscribe(
      (response)=>{
        this.livre = response.pubs;
      }
    )

   
  }
  //*******ajouter cours //***** */ *///
  ajouterCours(){
    if (this.id) {
      console.log("here cours",this.coursForm.value);
      
      this.coursForm.value.teachersId = this.id;
      this.coursForm.value.status = "Not Confirmed";
    this.coursService.ajouterCours(this.coursForm.value,this.coursForm.value.cours).subscribe(
    (response) =>{
      console.log("here after ajouter",response);
      
    });
  
      
    }

     
      
    
   
  





  Swal.fire({
    title: 'Votre Insertion a ete bien successe!',
    text: 'BIENVENUE AU COURS .',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
  this.router.navigate(["coursTable"])
  }
  

  ///**PARTIE PDF */
  onCoursSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.coursForm.patchValue({ cours: file });
    this.coursForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.coursPreview = reader.result as string
    };
    reader.readAsDataURL(file);

  }

  /*****bouton retour/*** */ 
  retour(){
    this.router.navigate(["espaceTeachers"])
  }
}
