import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';
import { TeachersService } from 'src/app/services/teachers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-examen',
  templateUrl: './ajouter-examen.component.html',
  styleUrls: ['./ajouter-examen.component.css']
})
export class AjouterExamenComponent implements OnInit {
  examenForm : FormGroup;
  id:any;
  examen : any={};
  devoir : any;

  constructor(private router : Router , private examenService : ExamenService) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUser")
    this.examenService.getExamensById(this.id).subscribe(
      (response)=>{
        this.devoir = response.exams;
      }
    )
  }

  validate(){
    if (this.id) {
      this.examen.teachersId = this.id;
      this.examen.status = "Not Confirmed";
      this.examenService.addExamen(this.examen).subscribe(
        (response)=>{
          console.log("here examen by teachers",response);
          
        }
      )
     
      
      
    } 
    Swal.fire({
      title: 'BIENVENUE!',
      text: 'VOTRE AJOUTER EXAMEN A ETE BIEN SUCCESS.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
      
      
    
    this.router.navigate(["examenTable"]);
  }
  //***retour en arriere *//**/
  retour(){
    this.router.navigate(["espaceTeachers"])
  }
}
