import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';
import { UpdatePublicationsService } from 'src/app/services/update-publications.service';

@Component({
  selector: 'app-modifier-publications-generale',
  templateUrl: './modifier-publications-generale.component.html',
  styleUrls: ['./modifier-publications-generale.component.css']
})
export class ModifierPublicationsGeneraleComponent implements OnInit {
  modifierForm : FormGroup;
  id : any;
  message : any;

  constructor(private updateService:UpdatePublicationsService, private formBuilder : FormBuilder ,
    private activatedRoute : ActivatedRoute , private router : Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.modifierForm = this.formBuilder.group({
      titre:["",[Validators.required , Validators.minLength(4), Validators.maxLength(20)]],
      message:["",[Validators.required , Validators.minLength(4), Validators.maxLength(100)]],
      date:["",[Validators.required ]],
      heure:["",[Validators.required]],
      salle:["",[Validators.required , Validators.minLength(4), Validators.maxLength(100)]],
    })
    this.updateService.getPublicationsById(this.id).subscribe(
      (response)=>{
        console.log("here update publications generale" , response);
        
        this.message = response.generales;
        this.modifierForm.patchValue(this.message);
      }
    )
    
  }
  ///***boutons modifier publications generale */
  update(){
    this.modifierForm.value._id = this.id;
    console.log("here is edite publications generales from teachers",this.modifierForm.value);
    
    this.updateService.updatePublications(this.modifierForm.value).subscribe(
      (response)=>{
        console.log("here is response publications generales",response);
        this.router.navigate(["admin"]);

        
      }

    )
  }
  //**bouton retour //** */ */
  retour(){
    this.router.navigate(["admin"]);
  }

}
