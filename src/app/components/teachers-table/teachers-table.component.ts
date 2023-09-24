import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-teachers-table',
  templateUrl: './teachers-table.component.html',
  styleUrls: ['./teachers-table.component.css']
})
export class TeachersTableComponent implements OnInit {
  teachers:any={};
  pageOfItems: Array<any>;

  constructor(private teachersService : TeachersService , private router : Router) { }

  ngOnInit() {
    this.teachersService.getAllTeachers().subscribe(
      (response)=>{
        this.teachers = response.teachers;
      }
    )
  }

  ///****delete teachers /*** */ */
  deleteTeachers(id:any){
    this.teachersService.deleteTeachers(id).subscribe(
      (response)=>{
        console.log("here teachers after delete",response);
        this.teachersService.getAllTeachers().subscribe(
          (response)=>{
            this.teachers = response.teachers;
          }
        )
        
      }
    )
  }

//****boiution update teachers //** */ */
editTeachers(id:any){
  this.router.navigate([`modifierTeachers/${id}`]);

}


  //****pagination /***** //*/ */
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
