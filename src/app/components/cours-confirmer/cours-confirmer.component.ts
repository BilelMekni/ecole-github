import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-cours-confirmer',
  templateUrl: './cours-confirmer.component.html',
  styleUrls: ['./cours-confirmer.component.css']
})
export class CoursConfirmerComponent implements OnInit {
  id:any;
  livre : any;
  pageOfItems: Array<any>;


  constructor(private courService : CoursService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUser");
    this.courService.getCoursConfirme().subscribe(
      (response)=>{
        this.livre = response.pubs
        console.log("here cours confirmer",this.livre);
        

      }
    )
  }

  //****retour *////
  retour(){
    this.router.navigate(["espaceEleve"])
  }
  //**pagination //** */ */
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
