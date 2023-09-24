import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReponderReponseService {
  sendUrl: string ="http://localhost:3006/repondres"

  constructor(private http: HttpClient) { }
  // Request : Add reponder reponse
  // Response : string
  addReponderTeachers(obj : any){
    return this.http.post<{message :string , isAdded : boolean}>(this.sendUrl,obj);
  }
      //****get all publications eleves by aggregate//*** */ */
   //****get all examens by aggregate//*** */ */
   getAllRepondre(){
    return this.http.get<{repondis : any}>(`${this.sendUrl}/all/repond/send/send/repond`);
  }
  ///***Confirmation Examens by admin */
confirmeRepondre(id:any){
  return this.http.post<{message : string}>(`${this.sendUrl}/status/${id}`,id);
}
  ///***get repondre reponse by id */
getRepondreById(id:any){
  return this.http.get<{retenus : string}>(`${this.sendUrl}/${id}`);
}
//**** get examens confirmer/*/// */
getRepondreConfirme(){
  return this.http.get<{pubs : any}>(`${this.sendUrl}`);
}
 //****delete repondre reponse  //**** */ */
 deleteRepondre(id: any){
  return this.http.delete<{isDeleted : boolean}>(`${this.sendUrl}/${id}`);
}
}
