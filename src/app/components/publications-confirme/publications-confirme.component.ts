import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-publications-confirme',
  templateUrl: './publications-confirme.component.html',
  styleUrls: ['./publications-confirme.component.css']
})
export class PublicationsConfirmeComponent implements OnInit {
  id:any;
  pubs:any;
  pageOfItems: Array<any>;


  constructor(private publicationService: PublicationService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUser");
    this.publicationService.getPublicationsConfirme().subscribe(
      (response)=>{
        this.pubs = response.pubs
        console.log("here pubs generales confirme",this.pubs);
        


      }
    )


  }
  ///**bouton retour //*** */ */
  retour(){
    this.router.navigate(["espaceEleve"])
  }

  //***pagination */
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
