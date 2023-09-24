import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UpdatePublicationsService } from 'src/app/services/update-publications.service';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {
  signupForm : FormGroup;
  id : any;
  signup : any = {};

  constructor(private updateService : UpdatePublicationsService) { }

  ngOnInit() {
  }
  // signup(){
  //   if (this.id) {
      
  //   } else {
  //     this.updateService.addTest(this.id).subscribe(
  //       (response)=>{
  //         console.log("here test",response);
          
  //       }
  //     )
      
  //   }
  // }

}
