import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  courses : any=[
    {title : "Informatique", price:"12DT" , titre:"Programmation" ,description : "La programmation, appelée aussi codage dans le domaine informatique, désigne l'ensemble des activités qui permettent l'écriture des programmes informatiques" , avatar : "assets/img/trainers/trainer-1.jpg" , image : "assets/img/inn.png" , name : "Abderrahmen",symbole:"20",sympole:"70"},
    {title : "Techniques", price:"10DT" , titre:"Mecaniques" ,description : "C’est le domaine des machines, moteurs, véhicules, organes (engrenages, poulies, courroies, vilebrequins, arbres de transmission, pistons…), qui produit ou transmet un mouvement, une force, une déformation." , avatar : "assets/img/trainers/trainer-2.jpg" , image : "assets/img/couelc.png" , name :"Amel",symbole:"21",sympole:"50"},
    {title : "Techniques", price:"10DT" , titre:"L’électromécanique" ,description : "C’est l’association des technologies de l’électricité et de la mécanique. Au début, l’électricité n’était qu’une source d’énergie au service de la mécanique. Depuis le début du 21e siècle, c’est l’électricité et l’électronique qui ont bien souvent besoin d’un support mécanique ou micromécanique." , avatar : "assets/img/trainers/trainer-3.jpg" , image : "assets/img/comecanique.jpg" , name : "Mourad",symbole:"50",sympole:"50"},
    {title : "Sciences Experimentale", price:"9DT" , titre:"Science De La Vie",description:" au sens général, désigne l'ensemble des connaissances humaines qui se rapportent à des faits obéissant à des lois objectives (ou considérés comme tels) et dont la mise au point exige systématisation et méthode" , avatar : "assets/img/trainers/comp.jpg" , image : "assets/img/sci.jpg", name:"Sonia",symbole:"10",sympole:"60"},
    {title : "Littéraire", price:"7DT" , titre:"Anglais" ,description : "La langue anglaise est ainsi composée d'environ 29 % de mots d'origine normande et française , et plus des deux tiers de son vocabulaire proviennent du français" , avatar : "assets/img/trainers/el.jpg" , image : "assets/img/aaa.avif" , name:"Ali",symbole:"20",sympole:"70"},
    {title : "Economie et Gestion", price:"15DT" , titre:"Gestion" ,description : "La gestion renvoie à la conduite des organisations : c'est l'action ou la manière de gérer, d'administrer, d'organiser quelque chose" , avatar : "assets/img/trainers/lfa.jpg" , image : "assets/img/ggg.png" , name : "Olfa",symbole:"50",sympole:"40"},





  ]

  constructor() { }

  ngOnInit() {
  }

}
