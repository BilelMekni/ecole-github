import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  teacherUrl : string="http://localhost:3006/teachers";

  constructor(private http :HttpClient) { }
  // Request : Signup Teachers
  // Response : String
  signup(obj:any, img : File){
    let formData = new FormData();
    formData.append("firstName",obj.firstName);
    formData.append("lastName",obj.lastName);
    formData.append("email",obj.email);
    formData.append("telephone",obj.telephone);
    formData.append("adresse",obj.adresse);
    formData.append("experience",obj.experience);
    formData.append("matricule",obj.matricule);
    formData.append("password",obj.password);
    formData.append("confPassword",obj.confPassword);
    formData.append("section",obj.section);
    formData.append("role",obj.role);
    formData.append("gender",obj.gender);
    formData.append("img",img);

    return this.http.post<{message: string}>(`${this.teacherUrl}/signup`,formData)
   
  }
  
   //****get all teachers in components Teachers Table**// */
   getAllTeachers(){
    return this.http.get<{teachers : any}>(this.teacherUrl)
  }
   //****delete teachers //**** */ */
 deleteTeachers(id: any){
  return this.http.delete<{isDeleted : boolean}>(`${this.teacherUrl}/${id}`);
}
//*** search by teachers**// */
searchTeachers(obj:any){
  return this.http.post<{searchTab : string}>(`${this.teacherUrl}/search`,obj);
}
///***get teachers by id//*** */ */
getTeachersById(id:any){
  return this.http.get<{teachers : string , message : any}>(`${this.teacherUrl}/${id}`);
}
////***update teachers by admin ///**** */ */
updateTeachers(obj:any){
  return this.http.put<{message : string}>(this.teacherUrl,obj);
}
 
}
