import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EnvoyerService } from 'src/app/services/envoyer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publications-eleves',
  templateUrl: './publications-eleves.component.html',
  styleUrls: ['./publications-eleves.component.css']
})
export class PublicationsElevesComponent implements OnInit {
  publicationForm : FormGroup;
  id : any;
  publication : any ={};
  publ : any;

  constructor(private envoyerService : EnvoyerService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUser")
    this.envoyerService.getPublicationsElevesById(this.id).subscribe(
      (response)=>{
        this.publ = response.pubs;

      }
    )
  }
   ///***ajouter publication eleves//*** */ */
   validate(){
    if (this.id) {
      
    
      // Add publication eleves
      this.publication.studentsId = this.id;
      this.publication.status = "Not Confirmed";
      this.envoyerService.addPublicationsEleves(this.publication).subscribe(
        (response) =>{
          console.log("Here response", response);
          
        }
      );
      
    
    } 
    Swal.fire({
      title: 'BIENVENUE!',
      text: 'VOTRE PUBLICATION ELEVES A ETE BIEN SUCCESS.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
    
    this.router.navigate(["publicationsElevesTables"])

  }

  /***boutons retour//* */
  retour(){
    this.router.navigate(["espaceEleve"])
  }

}
