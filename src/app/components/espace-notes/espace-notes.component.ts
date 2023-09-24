import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';
import { TeachersService } from 'src/app/services/teachers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-espace-notes',
  templateUrl: './espace-notes.component.html',
  styleUrls: ['./espace-notes.component.css']
})
export class EspaceNotesComponent implements OnInit {
  noteForm:FormGroup;
  note :any={};
  id : any;
  moyenne : any;

  constructor(private router : Router , private noteService : NoteService) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUser")
    this.noteService.getNotesById(this.id).subscribe(
      (response)=>{
        this.moyenne = response.pubs;
      }
    )

  }
  validate(){
    if (this.id) {
      this.note.teachersId = this.id;
      this.note.status = "Not Confirmed";
      this.noteService.addNote(this.note).subscribe(
        (response)=>{
          console.log("here note by teachers",response);
          
        }
      )
     
      
      
    } 
    Swal.fire({
      title: 'BIENVENUE!',
      text: 'VOTRE NOTE A ETE BIEN SUCCESS.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
      
      
    
    this.router.navigate(["noteTable"]);
  }
     /*****bouton retour/*** */ 

  annuler(){
  
    this.router.navigate(["espaceTeachers"])
  
  }
}
