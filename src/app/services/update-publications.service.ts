import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatePublicationsService {
  upPublUrl : string="http://localhost:3006/publicationsGenerale";

  constructor(private http :HttpClient) { }
  ///***get publications generales by id//*** */ */
getPublicationsById(id:any){
  return this.http.get<{generales : string , message : any}>(`${this.upPublUrl}/${id}`);
}
////***update patients by admin ///**** */ */
updatePublications(obj:any){
  return this.http.put<{message : string}>(this.upPublUrl,obj);
}
///****search sport by api *////
searchFromAPIByCountry(obj:any){
  return this.http.post<{result : any}>(this.upPublUrl + "/apiSports", obj);
}

}
