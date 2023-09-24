import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ElevesService } from 'src/app/services/eleves.service';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id:any;
  connectedUser : any = {};

  constructor(private adminService : AdminService , private teachersService : TeachersService ,
    private studentsService : ElevesService , private router : Router) { }

  ngOnInit() {
  this.id = localStorage.getItem("connectedUser");
  this.adminService.getAdminById(this.id).subscribe(
    (response)=>{
      this.connectedUser = response.admin;
      console.log("here admin connected",this.connectedUser);
    
    }
  )
  this.teachersService.getTeachersById(this.id).subscribe(
    (response)=>{
      this.connectedUser = response.teachers;
      console.log("here teachers connected",this.connectedUser);
      
    }
  )
  this.studentsService.getElevesById(this.id).subscribe(
    (response)=>{
      this.connectedUser = response.students;
      console.log("here students connected",this.connectedUser);
      
    }
  )

  }
  //**bouton logout //*** */ */
  logOut(){
    localStorage.removeItem("connectedUser");
    this.router.navigate([""]);
  }


}
