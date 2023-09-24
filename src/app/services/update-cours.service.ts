import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateCoursService {
  updcourUrl : string="http://localhost:3006/updateCours";


  constructor(private http : HttpClient) { }
    ///***get modifier cours by id//*** */ */
getCoursById(id:any){
  return this.http.get<{box : string , message : any}>(`${this.updcourUrl}/${id}`);
}
////***update cours by admin ///**** */ */
updateCours(obj:any){
  return this.http.put<{message : string}>(this.updcourUrl,obj);
}
}
