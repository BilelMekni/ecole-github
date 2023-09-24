import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamenService } from 'src/app/services/examen.service';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-examen-table',
  templateUrl: './examen-table.component.html',
  styleUrls: ['./examen-table.component.css']
})
export class ExamenTableComponent implements OnInit {
  examens : any={};
  pageOfItems: Array<any>;

  constructor(private router : Router , private examenService : ExamenService) { }

  ngOnInit() {
    this.examenService.getAllExamen().subscribe(
      (response)=>{
        this.examens = response.examens;
        console.log("here examen",this.examens);
        
      }
    )

  }



//****confirmation examens teachers by admin */
confirmeExamens(id:any){
  this.examenService.confirmeExamens(id).subscribe(
    (response)=>{
      this.examens = response.message
      this.examenService.getAllExamen().subscribe(
        (response)=>{
          this.examens= response.examens;
        }
      )

    }
  )
}



  ///****bouton retour//*** */ */
  retour(){
    this.router.navigate(["ajouterExamen"])
  }

////**delete examens eleves //** */ */
deleteExamensEleves(id:any){
  this.examenService.deleteExamensEleves(id).subscribe(
    (response)=>{
      console.log("here examen eleves after delete",response);
      this.examenService.getAllExamen().subscribe(
        (response)=>{
          this.examens = response.examens;
        }
      )
      
    }
  )
}
///*****bouton edit */
editExamens(id:any){
  this.router.navigate([`modifierExamens/${id}`]);
}


  //****module pagination //** */ */
 
onChangePage(pageOfItems: Array<any>) {
 // update current page of items
 this.pageOfItems = pageOfItems;
 }


}
