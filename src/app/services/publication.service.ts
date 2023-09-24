import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  publUrl: string ="http://localhost:3006/publications"

  constructor(private http : HttpClient) { }
  // Request : Add Publication
  // Response : string
  addPublication(obj : any){
    return this.http.post<{message : string , isAdded : boolean}>(this.publUrl,obj);
  }
  //****get all publications by aggregate//*** */ */
getAllPublications(){
  return this.http.get<{publications : any}>(`${this.publUrl}/all`);
}
///***Confirmation Publications */
confirmePublication(id:any){
  return this.http.post<{message : string}>(`${this.publUrl}/status/${id}`,id);
}
///***get Publication by id */
getPublicationsById(id:any){
  return this.http.get<{pubs : string }>(`${this.publUrl}/${id}`);
}
//**** get publications confirmer/*/// */
getPublicationsConfirme(){
  return this.http.get<{pubs : any}>(`${this.publUrl}`);
}
 //****delete examen eleves //**** */ */
 deletePublicationsGenerale(id: any){
  return this.http.delete<{isDeleted : boolean}>(`${this.publUrl}/${id}`);
}
//****Update publications generales //*** */ */
updatePublicationsGenerale(obj:any){
  return this.http.put<{message : string}>(this.publUrl,obj)
  }

    //get medecins by id///
// getPublicatinGeneralesById(id:any){
  
//   return this.http.get<{medecins : String, message : any}>(`${this.publUrl}/${id}`);
//   }
}
