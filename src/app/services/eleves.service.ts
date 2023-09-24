import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElevesService {
  eleveUrl : string="http://localhost:3006/eleves";

  constructor(private http :HttpClient) { }
  // Request : Signup Students
  // Response : String
  signup(obj:any, img : File){
    let formData = new FormData();
    formData.append("firstName",obj.firstName);
    formData.append("lastName",obj.lastName);
    formData.append("email",obj.email);
    formData.append("telephone",obj.telephone);
    formData.append("date",obj.date);
    formData.append("adresse",obj.adresse);
    formData.append("password",obj.password);
    formData.append("confPassword",obj.confPassword);
    formData.append("section",obj.section);
    formData.append("niveau",obj.niveau);
    formData.append("role",obj.role);
    formData.append("gender",obj.gender);
    formData.append("img",img);

    return this.http.post<{message: string}>(`${this.eleveUrl}/signup`,formData)
   
  }

  //*****login***//// */
  login(user:any){
    return this.http.post<{msg : String , user : any}>(`${this.eleveUrl}/login`,user);
  }
  //****get all eleves in components Students Table**// */
  getAllStudents(){
    return this.http.get<{eleves : any}>(this.eleveUrl)
  }
   //****delete eleves //**** */ */
 deleteEleves(id: any){
  return this.http.delete<{isDeleted : boolean}>(`${this.eleveUrl}/${id}`);
}
///***get patients by id//*** */ */
getElevesById(id:any){
  return this.http.get<{students : string , message : any}>(`${this.eleveUrl}/${id}`);
}
////***update students by admin ///**** */ */
updateStudents(obj:any){
  return this.http.put<{message : string}>(this.eleveUrl,obj);
}
}
