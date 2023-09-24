import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  examenUrl: string ="http://localhost:3006/examens"

  constructor(private http : HttpClient) { }
  ///***ajouter note students by teachers/**** */ */
  addExamen(obj:any){
    return this.http.post<{message :string , isAdded : boolean}>(this.examenUrl,obj);
  }
    ///****Get All examen *** ///*/
    //****get all examens by aggregate//*** */ */
getAllExamen(){
  return this.http.get<{examens : any}>(`${this.examenUrl}/all/examen/exam`);
}
///***Confirmation Examens by admin */
confirmeExamens(id:any){
  return this.http.post<{message : string}>(`${this.examenUrl}/status/${id}`,id);
}
///***get examen by id */
getExamensById(id:any){
  return this.http.get<{exams : string}>(`${this.examenUrl}/${id}`);
}
//**** get examens confirmer/*/// */
getExamenConfirme(){
  return this.http.get<{pubs : any}>(`${this.examenUrl}`);
}
 //****delete examen eleves //**** */ */
 deleteExamensEleves(id: any){
  return this.http.delete<{isDeleted : boolean}>(`${this.examenUrl}/${id}`);
}
}
