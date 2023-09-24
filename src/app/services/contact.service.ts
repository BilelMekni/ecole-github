import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactUrl : string="http://localhost:3006/contact";

  constructor(private http :HttpClient) { }

   //*** add contacter ///****/
 addContactHom(obj:any){
  return this.http.post<{message: string , isadded : boolean}>(this.contactUrl,obj);
}
//***get all contact problem widh admin//**** */ */
getContact(){
  return this.http.get<{contact : any}>(`${this.contactUrl}/contact/all`);
}
 //*****delete contact  widh admin//*** */ */
 deleteConatct(id:any){
  return this.http.delete<{isDeleted : boolean}>(`${this.contactUrl}/${id}`);
}
}
