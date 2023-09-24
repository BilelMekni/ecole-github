import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-publications-generale',
  templateUrl: './publications-generale.component.html',
  styleUrls: ['./publications-generale.component.css']
})
export class PublicationsGeneraleComponent implements OnInit {
  publicationForm : FormGroup;
  id : any;
  // Define Object
publication: any = {};
pub : any;

  constructor(private publicationService : PublicationService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUser")
    this.publicationService.getPublicationsById(this.id).subscribe(
      (response)=>{
        this.pub = response.pubs;
      }
    )
  }
  ///***ajouter publicatioj//*** */ */
  validate(){
    if (this.id) {
      
    
      // Add publication generale
      this.publication.teachersId = this.id;
      this.publication.status = "Not Confirmed";
      this.publicationService.addPublication(this.publication).subscribe(
        (response) =>{
          console.log("Here response", response);
          
        }
      );
      
    
    } 
    Swal.fire({
      title: 'BIENVENUE!',
      text: 'VOTRE PUBLICATION GENERALE A ETE BIEN SUCCESS.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
    
    this.router.navigate(["publicationTable"])

  }
   /*****bouton retour/*** */ 
   retour(){
    this.router.navigate(["espaceTeachers"])
  }

      
    }
  


