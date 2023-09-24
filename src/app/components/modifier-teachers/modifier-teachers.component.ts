import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-modifier-teachers',
  templateUrl: './modifier-teachers.component.html',
  styleUrls: ['./modifier-teachers.component.css']
})
export class ModifierTeachersComponent implements OnInit {
  modifierForm : FormGroup;
  id:any;
  teachers : any;

  constructor(private teachersService : TeachersService , private router: Router , private formBuilder : FormBuilder,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.modifierForm= this.formBuilder.group({
      telephone:["",[Validators.required , Validators.minLength(8) , Validators.maxLength(8)]],
      adresse:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(50)]],
      experience:["",[Validators.required , Validators.minLength(3), Validators.maxLength(10)]],
      matricule:["",[Validators.required , Validators.minLength(3), Validators.maxLength(10)]],


    })
    this.teachersService.getTeachersById(this.id).subscribe(
      (response)=>{
        console.log("here update teachers id",response);
        this.teachers = response.teachers;
        this.modifierForm.patchValue(this.teachers);

        
      }
    )
    
  }
  //****bouton modifier teachers by admin //***/
  modifier(){
    this.modifierForm.value._id = this.id;
    console.log("here edit from teachers by admin",this.modifierForm.value);
    this.teachersService.updateTeachers(this.modifierForm.value).subscribe(
      (response)=>{
        console.log("here response update teachers",response);
        this.router.navigate(["admin"]);
        
      }
    )
    
  }
  //****bouton retour //** */ */
  retour(){
    this.router.navigate(["admin"]);
  }


}
