import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  eleves : any = [
    {nom: "Bilel Mekni" , section:"4 Sc Info" , moyenne:"18.23",image:"ri-bar-chart-box-line",couleur:"#ffbb2c"},
    {nom: "karima Massoudi" , section:"4 Sc Exper" , moyenne:"18.52",image:"ri-calendar-todo-line",couleur:"#5578ff"},
    {nom: "Mohamed Ayari" , section:"4 Eco" , moyenne:"16.23",image:"ri-paint-brush-line",couleur:"#e80368"},
    {nom: "Salim Hkiri" , section:"4 Sc Tech" , moyenne:"17.23",image:"ri-database-2-line",couleur:"#e361ff"},
    {nom: "Amel Mhamdi" , section:"4 Math" , moyenne:"19.33",image:"ri-gradienter-line",couleur:"#47aeff"},
    {nom: "Islem Hasni" , section:"4 Math" , moyenne:"19.33",image:"ri-file-list-3-line",couleur:"#ffa76e"},
    {nom: "Maha Talbi" , section:"4 Letteres" , moyenne:"15.56",image:"ri-price-tag-2-line",couleur:"#11dbcf"},
    {nom: "Sana kharoubi" , section:"4 Sc Sport" , moyenne:"17.00",image:"ri-anchor-line",couleur:"#4233ff"},
    {nom: "Maram Masmoudi" , section:"1 Annee" , moyenne:"18.23",image:"ri-disc-line",couleur:"#b2904f"},
    {nom: "Helmi halim" , section:"2 Sc Eco" , moyenne:"15.48",image:"ri-base-station-line",couleur:"#b20969"},
    {nom: "Aymen Ayari" , section:"3 Sc Info" , moyenne:"16.30",image:"ri-fingerprint-line",couleur:"#ff5828"},
    {nom: "Hele Selmi" , section:"2 Sc Exper" , moyenne:"16.69",image:"ri-file-list-3-line",couleur:"#29cc61"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
