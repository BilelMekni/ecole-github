import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-cours-table',
  templateUrl: './cours-table.component.html',
  styleUrls: ['./cours-table.component.css']
})
export class CoursTableComponent implements OnInit {
  tests: any={};
  pageOfItems: Array<any>;


  constructor(private coursService : CoursService , private router : Router) { }

  ngOnInit() {
    this.coursService.getAllCour().subscribe(
      (response)=>{
        this.tests = response.box;
        console.log("here all cours",this.tests);
      }
    )
  }



 //****confirmation cours teachers by admin */
 confirmeCours(id:any){
  this.coursService.confirmeCours(id).subscribe(
    (response)=>{
      this.tests = response.message
      this.coursService.getAllCour().subscribe(
        (response)=>{
          this.tests= response.box;
        }
      )

    }
  )
}
///***  bouton modifie cours /****/
modifierCours(id:any){
  this.router.navigate([`modifierCours/${id}`]);
}

//***delete cours eleves //*** */ */
deleteCoursEleves(id:any){
  this.coursService.deleteCoursEleves(id).subscribe(
    (response)=>{
      console.log("here cours eleves after delete",response);
      this.coursService.getAllCour().subscribe(
        (response)=>{
          this.tests = response.box;
        }
      )
      
    }
  )
}



  ///**pagination//*** */ */
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
