import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  noteUrl: string ="http://localhost:3006/notes"

  constructor(private http : HttpClient) { }
  ///***ajouter note students by teachers/**** */ */
  addNote(obj:any){
    return this.http.post<{message :string , isAdded : boolean}>(this.noteUrl,obj);
  }
   ///****Get All note *** ///*/
    //****get all note by aggregate//*** */ */
getAllNote(){
  return this.http.get<{notes : any}>(`${this.noteUrl}/all/note`);
}
///***Confirmation Notes by admin */
confirmeNotes(id:any){
  return this.http.post<{message : string}>(`${this.noteUrl}/status/${id}`,id);
}
///***get note by id */
getNotesById(id:any){
  return this.http.get<{pubs : string}>(`${this.noteUrl}/${id}`);
}
//**** get notes confirmer/*/// */
getNoteConfirme(){
  return this.http.get<{pubs : any}>(`${this.noteUrl}`);
}
 //****delete notes eleves //**** */ */
 deleteNotesEleves(id: any){
  return this.http.delete<{isDeleted : boolean}>(`${this.noteUrl}/${id}`);
}

}
