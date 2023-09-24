import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvoyerService {
  envoiUrl: string ="http://localhost:3006/envoyer"

  constructor(private http : HttpClient) { }
  // Request : Add Publication
  // Response : string
  addPublicationsEleves(obj : any){
    return this.http.post<{message : string , isAdded : boolean}>(this.envoiUrl,obj);
  }
    //****get all publications eleves by aggregate//*** */ */
getAllPublicationsEleves(){
  return this.http.get<{publications : any}>(`${this.envoiUrl}/all/envoie/envoie/envoie`);
}
///***Confirmation Publications eleves */
confirmePublicationsEleves(id:any){
  return this.http.post<{message : string}>(`${this.envoiUrl}/status/${id}`,id);
}
///***get Publication by id */
getPublicationsElevesById(id:any){
  return this.http.get<{pubs : string}>(`${this.envoiUrl}/${id}`);
}
//**** get notes confirmer/*/// */
getPublicationsElevesConfirme(){
  return this.http.get<{pubs : any}>(`${this.envoiUrl}`);
}
 //****delete publication bu admin //**** */ */
 deletePublicationsEleves(id: any){
  return this.http.delete<{isDeleted : boolean}>(`${this.envoiUrl}/${id}`);
}
}
