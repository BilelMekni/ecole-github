import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-espace-eleves',
  templateUrl: './espace-eleves.component.html',
  styleUrls: ['./espace-eleves.component.css']
})
export class EspaceElevesComponent implements OnInit {

  constructor(private publicationService : PublicationService , private router : Router) { }

  ngOnInit() {

  }


  ///****boutons publications generales *///
  publicationGenerale(){
    this.router.navigate(["publicationsConfirmer"])
  }
  //***boutons cours confirmer //***/
  coursConfirme(){
    this.router.navigate(["coursConfirmer"])
  }
  //***boutons examens confirmer/*** */ */
  examensEleves(){
    this.router.navigate(["examensConfirmer"])
  }
  //***boutons notes confirmes //****/
  noteEleves(){
    this.router.navigate(["noteConfirmer"])
  }
  ///**boutons publications eleves //*** */ */
  publicationsEleves(){
    this.router.navigate(["publicationsEleves"])
  }
  //***boutons voir reponse ***///
  voirReponse(){
    this.router.navigate(["voirReponse"])
  }

}
