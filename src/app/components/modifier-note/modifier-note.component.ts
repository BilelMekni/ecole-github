import { Component, OnInit } from '@angular/core';
import { UpdateNoteService } from 'src/app/services/update-note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier-note',
  templateUrl: './modifier-note.component.html',
  styleUrls: ['./modifier-note.component.css']
})
export class ModifierNoteComponent implements OnInit {
  modifierForm : FormGroup;
  id : any;
  moyenne : any;


  constructor(private updateService : UpdateNoteService , private activatedRoute : ActivatedRoute,
    private router : Router , private formBuilder  : FormBuilder) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("n");
    console.log(this.id);
    this.modifierForm = this.formBuilder.group({
      nom:["",[Validators.required , Validators.minLength(4) , Validators.maxLength(20)]],
      section:[""],
      niveau:[""],
      note:["",[Validators.required , Validators.minLength(4) ,Validators.maxLength(8)]],
      coefficient:["",[Validators.required , Validators.minLength(1), Validators.maxLength(2)]],
      semester:[""],
      remarque:["",[Validators.required , Validators.minLength(4), Validators.maxLength(10)]]

    })
    this.updateService.getUpdateById(this.id).subscribe(
      (response)=>{
        console.log("here note by id",response);
        this.moyenne = response.moyenne;
        this.modifierForm.patchValue(this.moyenne);
        
      }
    )
    

  }
  ///***bouton update //** */ */
  update(){
    this.modifierForm.value._id = this.id;
    console.log("here edite from notes" , this.modifierForm.value);
    this.updateService.updateNotes(this.modifierForm.value).subscribe(
      (response)=>{
        console.log("here response update notes",response);
        this.router.navigate(["admin"]);
        
      }
    )

    
  }
  //***bouton retour //*/
  retour(){
    this.router.navigate(["admin"]);
  }

}
