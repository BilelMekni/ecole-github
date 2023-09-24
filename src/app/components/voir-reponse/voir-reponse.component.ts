import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReponderReponseService } from 'src/app/services/reponder-reponse.service';

@Component({
  selector: 'app-voir-reponse',
  templateUrl: './voir-reponse.component.html',
  styleUrls: ['./voir-reponse.component.css']
})
export class VoirReponseComponent implements OnInit {
  id:any;
  voir : any;
  pageOfItems: Array<any>;
  

  constructor(private router : Router , private repondreServcie : ReponderReponseService) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUser");
   this.repondreServcie.getRepondreConfirme().subscribe(
    (response)=>{
      this.voir = response.pubs;
      console.log("here repondre reponse confirme",this.voir);
      

    }
   )

  }
  //****pagination //*** */ */
  
onChangePage(pageOfItems: Array<any>) {
 // update current page of items
 this.pageOfItems = pageOfItems;
 }
 //***bouton retour //*** */ */
 retour(){
  this.router.navigate(["espaceEleve"]);
 }

 

}
