import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-publication-table',
  templateUrl: './publication-table.component.html',
  styleUrls: ['./publication-table.component.css']
})
export class PublicationTableComponent implements OnInit {
  publications : any={};
  pageOfItems: Array<any>;n

  constructor(private publicationService : PublicationService , private router : Router) { }

  ngOnInit() {
    this.publicationService.getAllPublications().subscribe(
      (response)=>{
        this.publications = response.publications
        console.log("here publications generale enseignants" , this.publications);
        
      }
    )
  }
  //****confirmation publications generales */
  confirmePublications(id:any){
    this.publicationService.confirmePublication(id).subscribe(
      (response)=>{
        this.publications = response.message
        this.publicationService.getAllPublications().subscribe(
          (response)=>{
            this.publications= response.publications
          }
        )

      }
    )
  }

  ///***delete publications generale by teachers //****/
  deletePublicationsGenerale(id:any){
    this.publicationService.deletePublicationsGenerale(id).subscribe(
      (response)=>{
        console.log("here publications generale by teachers",response);
        this.publicationService.getAllPublications().subscribe(
          (response)=>{
            this.publications = response.publications;
          }
        )
        
      }
    )
  }
//****bouton update publications generales //** */ */
updatePublicationsGenerales(id:any){
  this.router.navigate([`modifierPublications/${id}`]);
}


  //******pagination //*** */ *///
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
