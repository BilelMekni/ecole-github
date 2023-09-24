import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {
  admin : any={};
  pageOfItems: Array<any>;


  constructor(private adminService : AdminService , private router : Router) { }

  ngOnInit() {
    this.adminService.getAllAdmin().subscribe(
      (response)=>{
        this.admin = response.admin;

      }
    )
  }

  //***delete admin //** */ */
  deleteAdmin(id:any){
    this.adminService.deleteAdmin(id).subscribe(
      (response)=>{
        console.log("here response admin after delete",response);
        this.adminService.getAllAdmin().subscribe(
          (response)=>{
            this.admin = response.admin;
          }
          
        )
        
      }
    )
  }

  //*****bouton modifier admin //***/
  editAdmin(id:any){
    this.router.navigate([`modifierAdmin/${id}`]);
  }

  //****pagination *////
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
