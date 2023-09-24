import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnvoyerService } from 'src/app/services/envoyer.service';

@Component({
  selector: 'app-publications-eleves-tables',
  templateUrl: './publications-eleves-tables.component.html',
  styleUrls: ['./publications-eleves-tables.component.css']
})
export class PublicationsElevesTablesComponent implements OnInit {
  publications :any;
  pageOfItems: Array<any>;

  constructor(private envoyerService : EnvoyerService , private router : Router) { }

  ngOnInit() {
    this.envoyerService.getAllPublicationsEleves().subscribe(
      (response)=>{
        this.publications = response.publications
        console.log("here get all publications eleves" , this.publications);
        
      }
    )
  }


   //****confirmation publications eleves */
   confirmePublicationsEleves(id:any){
    this.envoyerService.confirmePublicationsEleves(id).subscribe(
      (response)=>{
        this.publications = response.message
        this.envoyerService.getAllPublicationsEleves().subscribe(
          (response)=>{
            this.publications= response.publications
          }
        )

      }
    )
  }

  //***delete publications eleves //**** */ */
  deletePublicationsEleves(id:any){
    this.envoyerService.deletePublicationsEleves(id).subscribe(
      (response)=>{
        console.log("here publications eleves after delete",response);
        this.envoyerService.getAllPublicationsEleves().subscribe(
          (response)=>{
            this.publications = response.publications;
          }
        )
        
      }
    )

  }
//*******bouton edit publications eleves //*** */ */
editPublicationsEleves(id:any){
  this.router.navigate([`modifierPubliEleves/${id}`]);
}

  //***pagination //** */ */
 
onChangePage(pageOfItems: Array<any>) {
 // update current page of items
 this.pageOfItems = pageOfItems;
 }
}
