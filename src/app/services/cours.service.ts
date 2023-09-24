import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  courUrl: string ="http://localhost:3006/cours"

  constructor(private http : HttpClient) { }
   // Request : Signup Teachers
  // Response : String
  ajouterCours(obj:any, cours : File){
    let formData = new FormData();
    formData.append("titre",obj.titre);
    formData.append("reference",obj.reference);
    formData.append("section",obj.section);
    formData.append("status",obj.status);
   
    formData.append("cours",cours);

    return this.http.post<{message: string , isAdded : boolean}>(`${this.courUrl}/ajouterCours`,formData)
   
  }
    ///****Get All cour *** ///*/
    //****get all publications by aggregate//*** */ */
getAllCour(){
  return this.http.get<{box : any}>(`${this.courUrl}/all/cour/cour`);
}
///***Confirmation cours by admin */
confirmeCours(id:any){
  return this.http.post<{message : string}>(`${this.courUrl}/status/${id}`,id);
}
///***get note by id */
getCoursById(id:any){
  return this.http.get<{pubs : string}>(`${this.courUrl}/${id}`);
}
//**** get cours confirmer/*/// */
getCoursConfirme(){
  return this.http.get<{pubs : any}>(`${this.courUrl}`);
}
 //****delete cours eleves //**** */ */
 deleteCoursEleves(id: any){
  return this.http.delete<{isDeleted : boolean}>(`${this.courUrl}/${id}`);
}
}
