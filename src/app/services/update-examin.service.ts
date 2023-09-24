import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateExaminService {
  updexamenUrl : string="http://localhost:3006/updateExamens";

  constructor(private http : HttpClient) { }
   ///***get modifier examens by id//*** */ */
getUpdateById(id:any){
  return this.http.get<{principale : string , message : any}>(`${this.updexamenUrl}/${id}`);
}
////***update examens by admin ///**** */ */
updateExamens(obj:any){
  return this.http.put<{message : string}>(this.updexamenUrl,obj);
}
}
