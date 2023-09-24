import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ElevesService } from 'src/app/services/eleves.service';

@Component({
  selector: 'app-modifer-students',
  templateUrl: './modifer-students.component.html',
  styleUrls: ['./modifer-students.component.css']
})
export class ModiferStudentsComponent implements OnInit {
  modifierForm : FormGroup;
  id:any;
  student : any;

  constructor(private elevesService: ElevesService , private formBuilder : FormBuilder ,
    private router : Router , private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.modifierForm = this.formBuilder.group({
      telephone:["",[Validators.required , Validators.minLength(8) , Validators.maxLength(8)]],
      date:["",[Validators.required]],
      adresse:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(50)]],
      section:[""],
      niveau:[""],
    })
    this.elevesService.getElevesById(this.id).subscribe(
      (response)=>{
        console.log("here eleves by id", response);
        this.student = response.students;
        this.modifierForm.patchValue(this.student);
        
      }
    )
    
  }
  //***bouton modifier eleves //**** */ */
  modifier(){
    this.modifierForm.value._id =this.id;
    console.log("here edit from students",this.modifierForm.value);
    this.elevesService.updateStudents(this.modifierForm.value).subscribe(
      (response)=>{
        console.log("here reponse update students",response);
        this.router.navigate(["admin"]);
        
      }
    )
    
  }
  ///****retour /// */
  retour(){
    this.router.navigate(["admin"]);
  }

}
