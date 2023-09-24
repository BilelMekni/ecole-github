import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-modifier-admin',
  templateUrl: './modifier-admin.component.html',
  styleUrls: ['./modifier-admin.component.css']
})
export class ModifierAdminComponent implements OnInit {

  modifierForm : FormGroup;
  id:any;
  admin:any;
  constructor(private adminService : AdminService , private formBuilder : FormBuilder ,
    private router : Router , private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.modifierForm = this.formBuilder.group({
      firstName:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
      lastName:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
      email:["",[Validators.required , Validators.email]],
      telephone:["",[Validators.required , Validators.minLength(8) , Validators.maxLength(8)]],
      adresse:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(50)]],
    })
    this.adminService.getAdminById(this.id).subscribe(
      (response)=>{
        this.admin=response.admin;
        this.modifierForm.patchValue(this.admin);
      }
    )
    
  }
  ///***bouton modifier admin/*** */ */
  modifier(){
    this.modifierForm.value._id=this.id;
    console.log("here edit from admin",this.modifierForm.value);
    this.adminService.updateAdmin(this.modifierForm.value).subscribe(
      (response)=>{
        console.log("here reponse update admin",response);
        this.router.navigate(["admin"]);
        

      }
    )
    
  }
  //****bouton retour //**/
  annuler(){
    this.router.navigate(["admin"]);
  }

}
