import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReponderReponseService } from 'src/app/services/reponder-reponse.service';

@Component({
  selector: 'app-repondre-table',
  templateUrl: './repondre-table.component.html',
  styleUrls: ['./repondre-table.component.css']
})
export class RepondreTableComponent implements OnInit {
  publications : any;
  pageOfItems: Array<any>;

  constructor(private reponderService : ReponderReponseService , private router : Router) { }

  ngOnInit() {
    this.reponderService.getAllRepondre().subscribe(
      (response)=>{
        this.publications = response.repondis;
        console.log("her repondre reponse" , response);
        
      }
    )
  }

  ///***boutons confirme repondre ///**/
  confirmeRepondre(id:any){
    this.reponderService.confirmeRepondre(id).subscribe(
      (response)=>{
        this.publications = response.message;
        this.reponderService.getAllRepondre().subscribe(
          (response)=>{
            this.publications = response.repondis;
          }
        )
      }
    )

  }

  //*****boutons delete */
  deleteRepondre(id:any){
    this.reponderService.deleteRepondre(id).subscribe(
      (response)=>{
        console.log("here repondre reponse after delete" , response);
        this.reponderService.getAllRepondre().subscribe(
          (response)=>{
            this.publications = response.repondis;
          }
        )
        
      }
    )

  }
  //***pagination //** */ */
  
onChangePage(pageOfItems: Array<any>) {
 // update current page of items
 this.pageOfItems = pageOfItems;
 }

}
