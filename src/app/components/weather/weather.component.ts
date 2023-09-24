import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { UpdatePublicationsService } from 'src/app/services/update-publications.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  searchForm : FormGroup;
  path : string;
  weatherResult: any;
  teamsResult: any;
  title: string = "Sports";
  placeHolderTitle: string = "Recherche Pays"
  errorTitle: string = "Pays";
  logoTitle: string= "Sport"
  image:any ="assets/img/footbal.avif"
  constructor(private weatherService : WeatherService, private formBuilder:FormBuilder ,
    private router : Router , private updateService : UpdatePublicationsService ) { }

  ngOnInit() {
    this.path = this.router.url;
    if (this.path == "/weather") {
      this.title = "Recherche Temps";
      this.placeHolderTitle = "Recherche Ville";
      this.errorTitle = "Ville";
      this.logoTitle = "Meteo";
      this.image = "assets/img/weather.avif"
    } 
    this.searchForm = this.formBuilder.group({
      ville:["",[Validators.required , Validators.minLength(4), Validators.maxLength(20)]],
    })

  }
  search(){
    console.log("Here object", this.searchForm.value);
   if (this.path =="/weather") {
    this.weatherService.search(this.searchForm.value).subscribe(
      (response) =>{
        console.log("Here response from BE",response.result);
        this.weatherResult = response.result;
        
      }
    );
    
   } else {
    this.updateService.searchFromAPIByCountry(this.searchForm.value).subscribe(
      (data)=>{
        console.log("Here result after search",data.result);
        this.teamsResult = data.result;
      }
    )
    
   }
    
  }

}
