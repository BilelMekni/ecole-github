import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateCoursService } from 'src/app/services/update-cours.service';

@Component({
  selector: 'app-modifier-cours',
  templateUrl: './modifier-cours.component.html',
  styleUrls: ['./modifier-cours.component.css']
})
export class ModifierCoursComponent implements OnInit {
  modifierForm : FormGroup;
  id :any;
  cahier : any;


  constructor(private updateService : UpdateCoursService , private formBuilder : FormBuilder ,
    private activatedRoute : ActivatedRoute , private router : Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("c"),
    console.log(this.id);
    this.modifierForm = this.formBuilder.group({
      titre :["",[Validators.required ,  Validators.minLength(3) , Validators.maxLength(20)]],
      reference :["",[Validators.required , Validators.minLength(5) , Validators.maxLength(10)]],
      section :["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
    })
    this.updateService.getCoursById(this.id).subscribe(
      (response)=>{
        console.log("here cours id",response);
        this.cahier = response.box;
        this.modifierForm.patchValue(this.cahier);
        
      }
    )
    
  }
  //****bouton update //*** */ */
  modifierCours(){
    this.modifierForm.value._id=this.id;
    console.log("here edit form cours",this.modifierForm.value);
    this.updateService.updateCours(this.modifierForm.value).subscribe(
      (response)=>{
        console.log("here reponse update cours",response);
        this.router.navigate(["admin"]);
        
      }
    )
    
  }

}
