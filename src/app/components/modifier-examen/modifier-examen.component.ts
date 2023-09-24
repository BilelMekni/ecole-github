import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateExaminService } from 'src/app/services/update-examin.service';

@Component({
  selector: 'app-modifier-examen',
  templateUrl: './modifier-examen.component.html',
  styleUrls: ['./modifier-examen.component.css']
})
export class ModifierExamenComponent implements OnInit {
  modifierForm:FormGroup;
  id : any;
  principale : any;

  constructor( private updateService : UpdateExaminService , private activatedRoute : ActivatedRoute ,
    private router : Router , private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("e");
    console.log(this.id);
    this.modifierForm = this.formBuilder.group({
      titre:["",[Validators.required ,Validators.minLength(3) , Validators.maxLength(20)]],
      nom:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
      date:["",[Validators.required]],
      heure:["",[Validators.required ,Validators.minLength(3) , Validators.maxLength(20)]],
      salle:["",[Validators.required , Validators.minLength(3), Validators.maxLength(20)]],
    })
    this.updateService.getUpdateById(this.id).subscribe(
      (response)=>{
        console.log("here response examens by id",response);
        this.principale = response.principale;
        this.modifierForm.patchValue(this.principale);
        
      }
    )

    
  }
  ///***bouton update //*** */ */
  update(){
    this.modifierForm.value._id = this.id;
    console.log("here edit from examens",this.modifierForm.value);
    this.updateService.updateExamens(this.modifierForm.value).subscribe(
      (response)=>{
        console.log("here response examen by id",response);
        this.router.navigate(["admin"]);
        
      }
    )
    

  }

}
