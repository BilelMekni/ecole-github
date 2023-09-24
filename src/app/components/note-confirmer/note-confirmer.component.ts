import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-confirmer',
  templateUrl: './note-confirmer.component.html',
  styleUrls: ['./note-confirmer.component.css']
})
export class NoteConfirmerComponent implements OnInit {
  id:any;
  moyenne : any;
  pageOfItems: Array<any>;


  constructor(private noteService : NoteService , private router : Router) { }

  ngOnInit() {
    this.id = localStorage.getItem("connectedUser");
    this.noteService.getNoteConfirme().subscribe(
      (response)=>{
        this.moyenne = response.pubs
        console.log("here notes confirmer", this.moyenne);
        
      }
    )
  }
  //****retour ///*/
 retour(){
  this.router.navigate(["espaceEleve"])
 }
 ///**pagination //*** */ */
 onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
  }

}
