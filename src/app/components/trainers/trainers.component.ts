import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  professeurs:any=[
    {title : "Abderahmeen Masmoudi" ,specialite: "Informatique", description:"je suis travail pendant 2001, mon age 31, et mon experience 10 ans",image:"assets/img/trainers/trainer-1.jpg"},
    {title : "Nabiha Amri" ,specialite: "Science", description:"je suis travail pendant 2001 , mon age 32, et mpn experience 6 ans",image:"assets/img/trainers/trainer-2.jpg"},
    {title : "Najoua Boughanmi" ,specialite: "Mecanique", description:"je suis travail pendant 2001, mon age 30 , et mon experience 20 ans",image:"assets/img/trainers/nnnn.jpg"},
    {title : "Kamel Bousalmi" ,specialite: "Mathematiques", description:"je suis travail pendant 2001,mon age 40 ans, et mon experience 15 ans ",image:"assets/img/trainers/trainer-3.jpg"},
    {title : "Mouna Ayari" ,specialite: "Economie", description:"je suis travail pendant 2000,mon age 31 ans, et mon experience 4 ans",image:"assets/img/trainers/mmmmm.jpg"},
    {title : "Walid Hammdi" ,specialite: "Sport", description:"je suis travail pendant 2001,mon age 30 ans,et mon experience 10 ans",image:"assets/img/trainers/ww.webp"},

  ]
  constructor() { }

  ngOnInit() {
  }

}
