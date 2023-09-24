import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateNoteService {
  updnoteUrl : string="http://localhost:3006/updateNotes";

  constructor(private http :HttpClient) { }
  ///***get modifier notes by id//*** */ */
getUpdateById(id:any){
  return this.http.get<{moyenne : string , message : any}>(`${this.updnoteUrl}/${id}`);
}
////***update patients by admin ///**** */ */
updateNotes(obj:any){
  return this.http.put<{message : string}>(this.updnoteUrl,obj);
}
}
