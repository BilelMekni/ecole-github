import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.css']
})
export class WhyComponent implements OnInit {
  sections : any = [
    {nom : "Letters" , description : "Section de l'école pratique des hautes études; section littéraire, juridique, scientifique du conseil national des universités; section classique, moderne" , image:"assets/img/ll.jpg"},
    {nom : "Economie et Gestion" , description : "Etymologiquement, l'économie est l'art de bien administrer une maison, de gérer les biens d'une personne, puis par extension d'un pays. Plus généralement, l'économie est une science sociale qui étudie la production, la répartition, la distribution et la consommation des richesses d'une société" , image:"assets/img/eco.jpg"},
    {nom : "Science Informatique" , description : "L'informatique est un domaine d'activité scientifique, technique, et industriel concernant le traitement automatique de l'information numérique par l'exécution de programmes informatiques hébergés par des dispositifs électriques-électroniques : des systèmes embarqués, des ordinateurs, des robots, des automates, etc" , image:"assets/img/pc.jpg"},
    {nom : "Science Experimentale" , description : "Les sciences expérimentales sont les sciences qui font appel à la méthode expérimentale, par opposition aux mathématiques et à l'informatique. On les subdivise en sciences physiques (physique et chimie) et sciences de la nature (biologie et médecine), la géologie pouvant quant à elle être classée parmi les premières ou les secondes." , image:"assets/img/sc.jpg"},
    {nom : "Science Technique" , description : "Qui concerne les applications de la science, de la connaissance scientifique ou théorique, dans les réalisations pratiques, les productions industrielles et économiques. Connaissances techniques; milieu technique; recherche scientifique et technique; développement, équipement technique d'un pays; sociétés techniques et industrielles; progrès techniques de l'informatique" , image:"assets/img/t.png"},
    {nom : "Mathematiques" , description : "La spécialité Mathématiques permet de découvrir de nouveaux outils et concepts mathématiques qui seront utiles pour la poursuite d'études dans le supérieur, mais aussi dans les autres disciplines comme la Physique-Chimie ou les Sciences économiques et sociales" , image:"assets/img/m.jpg"},
   
  ]

  constructor() { }

  ngOnInit() {
  }

}
