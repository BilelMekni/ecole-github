import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espace-teachers',
  templateUrl: './espace-teachers.component.html',
  styleUrls: ['./espace-teachers.component.css']
})
export class EspaceTeachersComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {
  }
  ///***ajouter cours *///
  ajouterCours(){
    this.router.navigate(["ajouterCours"]);
  }
  ///**ajouter examen/**** */ */
  ajouterExamen(){
    this.router.navigate(["ajouterExamen"]);
  }
  //**publications generales/*** */ */
  publications(){
    this.router.navigate(["publicationsGenerales"]);
  }

  //****notes des eleves */
  noteEleves(){
    this.router.navigate(["espaceNote"]);
  }
  ///**boutons regarder publications //*** */ */
  voirPublicationsEleves(){
    this.router.navigate(["publicationsElevesConfirme"])
  }


}
