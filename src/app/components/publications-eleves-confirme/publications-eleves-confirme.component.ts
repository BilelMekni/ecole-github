import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnvoyerService } from 'src/app/services/envoyer.service';

@Component({
  selector: 'app-publications-eleves-confirme',
  templateUrl: './publications-eleves-confirme.component.html',
  styleUrls: ['./publications-eleves-confirme.component.css']
})
export class PublicationsElevesConfirmeComponent implements OnInit {
  id : any;
  public : any;
  pageOfItems: Array<any>;

  constructor(private envoyerService : EnvoyerService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUser");
    this.envoyerService.getPublicationsElevesConfirme().subscribe(
      (response)=>{
        this.public = response.pubs
        console.log("here publications eleves " , this.public);
        
      }
    )
  }
//***bouton retour //*** */ */
retour(){
  this.router.navigate(["espaceTeachers"])
}
//***bouton reponder //*** */ */
reponder(){
  this.router.navigate(["sendReponse"])
}
//***pagination /*** */ */

onChangePage(pageOfItems: Array<any>) {
 // update current page of items
 this.pageOfItems = pageOfItems;
 }
}
