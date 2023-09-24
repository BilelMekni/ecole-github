import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElevesService } from 'src/app/services/eleves.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {
  eleves : any={};
  pageOfItems: Array<any>;


  constructor(private elevesService : ElevesService , private router : Router) { }

  ngOnInit() {
    this.elevesService.getAllStudents().subscribe(
      (response)=>{
        this.eleves = response.eleves;
      }
    )
  }

//***delete eleves by admin//** */ */
deleteEleves(id:any){
  this.elevesService.deleteEleves(id).subscribe(
    (response)=>{
      console.log("here response eleves after delete",response);
      this.elevesService.getAllStudents().subscribe(
        (response)=>{
          this.eleves = response.eleves;
        }
      )
      
    }
  )
}

//***bouton edit eleves //*****/
editEleves(id:any){
  this.router.navigate([`modifierEleves/${id}`]);
}

  //****pagination**//// */
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
