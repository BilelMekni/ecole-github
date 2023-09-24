import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { ReponderReponseService } from 'src/app/services/reponder-reponse.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-send-reponse',
  templateUrl: './send-reponse.component.html',
  styleUrls: ['./send-reponse.component.css']
})
export class SendReponseComponent implements OnInit {
  envoieForm : FormGroup;
  id : any;
  envoie : any={};
  devoir : any;

  constructor(private reponderService : ReponderReponseService , private router :Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUser");
    this.reponderService.getRepondreById(this.id).subscribe(
      (response)=>{
        this.devoir = response.retenus;
      }
    )
    
  }


  ////add reponder****/////
  validate(){
    if (this.id) {
    
        this.envoie.teachersId = this.id;
      this.envoie.status = "Not Confirmed";
        this.reponderService.addReponderTeachers(this.envoie).subscribe(
          (response)=>{
            console.log("here reponder reponse",response);
            
          }
        );
      }
    
    Swal.fire({
      title: 'Bienvenue!',
      text: 'Votre Jouter Reponder A ete Bien Success.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
    this.router.navigate(["reponderTable"]);

  }
  //***bouton retour //** */ */
  retour(){
    this.router.navigate[("")];
  }

}
