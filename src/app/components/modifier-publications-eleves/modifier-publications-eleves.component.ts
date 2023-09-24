import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatePublEleveService } from 'src/app/services/update-publ-eleve.service';

@Component({
  selector: 'app-modifier-publications-eleves',
  templateUrl: './modifier-publications-eleves.component.html',
  styleUrls: ['./modifier-publications-eleves.component.css']
})
export class ModifierPublicationsElevesComponent implements OnInit {
  modifierForm : FormGroup;
  id:any;
  pobs:any;

  constructor(private updateService :  UpdatePublEleveService , private activatedRoute : ActivatedRoute,
    private router : Router , private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("p");
    console.log(this.id);
    this.modifierForm = this.formBuilder.group({
      titre:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(50)]],
      message:["",[ Validators.required , Validators.minLength(3) , Validators.maxLength(400)]],
    })
    this.updateService.getPubliEleveById(this.id).subscribe(
      (response)=>{
        console.log("here response pub eleves by id",response);
        this.pobs = response.formation;
        this.modifierForm.patchValue(this.pobs);
        
      }
    )
    
  }

  ///****bouton update publications eleves */
  update(){
    this.modifierForm.value._id =this.id;
    console.log("here edit publications elves",this.modifierForm.value);
    this.updateService.updatePublicationsEleves(this.modifierForm.value).subscribe(
      (response)=>{
        console.log("here response update publ eleves",response);
        this.router.navigate(["admin"]);
        
      }
    )
    
  }
  //****bouton retour /**** */ */
  retour(){
    this.router.navigate(["admin"]);
  }

}
