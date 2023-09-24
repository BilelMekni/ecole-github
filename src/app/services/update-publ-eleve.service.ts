import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatePublEleveService {
  updpubUrl : string="http://localhost:3006/updatePublicationsEleves";

  constructor(private http :HttpClient) { }
     ///***get modifier examens by id//*** */ */
getPubliEleveById(id:any){
  return this.http.get<{formation : string , message : any}>(`${this.updpubUrl}/${id}`);
}
////***update examens by admin ///**** */ */
updatePublicationsEleves(obj:any){
  return this.http.put<{message : string}>(this.updpubUrl,obj);
}
}
