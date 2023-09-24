import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.css']
})
export class CountsComponent implements OnInit {
  directives : any = [
    {nom : "Smair Ben Salah" , title : "Directeur Generale" , Annee :"01/09/2010", images:"assets/img/trainers/direct.webp"},
    {nom : "Meriem Harbaoui" , title : "Secritaire Generale" , Annee :"01/09/2008", images:"assets/img/trainers/rr.jpg"},
    {nom : "Kamel Arfaoui" , title : "Surveillant Generale" , Annee :"01/09/2009", images:"assets/img/trainers/scr.webp"},
    {nom : "Karima Hammami" , title : " Compatabilite et Finance" , Annee :"01/03/2006", images:"assets/img/trainers/kkkkk.webp"},
    {nom : "Ali Gharoubi" , title : " Controle Des Eleves" , Annee :"15/08/2005", images:"assets/img/trainers/ali.webp"},
    {nom : "Ahmed Gharbi" , title : " Suivi des examens" , Annee :"15/01/2005", images:"assets/img/trainers/rrr.webp"},



  ]

  constructor() { }
  

  ngOnInit() {
  }

}
