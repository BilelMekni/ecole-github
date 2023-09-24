import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';

@Component({
  selector: 'app-examens-confirmer',
  templateUrl: './examens-confirmer.component.html',
  styleUrls: ['./examens-confirmer.component.css']
})
export class ExamensConfirmerComponent implements OnInit {

  id:any;
  examens : any;
  pageOfItems: Array<any>;

  constructor(private examenService : ExamenService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUser");
    this.examenService.getExamenConfirme().subscribe(
      (response)=>{
        this.examens = response.pubs
        console.log("here examen confirmer",this.examens);
        
      }
    )
  }
  //****bouton retour //*** */ */
  retour(){
    this.router.navigate(["espaceEleve"])
  }

  //***pagination //*** */ */
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
