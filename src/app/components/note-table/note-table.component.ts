import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';
import { TeachersService } from 'src/app/services/teachers.service';

@Component({
  selector: 'app-note-table',
  templateUrl: './note-table.component.html',
  styleUrls: ['./note-table.component.css']
})
export class NoteTableComponent implements OnInit {
  notes : any ={} ;
  pageOfItems: Array<any>;


  constructor(private noteService : NoteService,  private router :Router) { }

  ngOnInit() {
    this.noteService.getAllNote().subscribe(
      (response)=>{
        this.notes = response.notes;
        console.log("here all note by teachers",this.notes);
        
      }
    )
  }

   //****confirmation note teachers by admin */
   confirmeNotes(id:any){
    this.noteService.confirmeNotes(id).subscribe(
      (response)=>{
        this.notes = response.message
        this.noteService.getAllNote().subscribe(
          (response)=>{
            this.notes= response.notes
          }
        )

      }
    )
  }
  ///***delete notes eleves //** */ */
  deleteNotesEleves(id:any){
    this.noteService.deleteNotesEleves(id).subscribe(
      (response)=>{
        console.log("here notes eleves after delete",response);
        this.noteService.getAllNote().subscribe(
          (response)=>{
            this.notes = response.notes;
          }
        )
        
      }
    )
  }

  //****boutons edit notes eleves //*** */ */
  editNotesEleves(id:any){
    this.router.navigate([`modifierNotes/${id}`]);
    
   }
  //****pagination*//// */
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
