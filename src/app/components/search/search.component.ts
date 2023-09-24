import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeachersService } from 'src/app/services/teachers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm : FormGroup;
  id:any;
  searche : any=[];

  constructor(private teachersService : TeachersService , private formBuilder : FormBuilder , private router : Router) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group(
      {
        firstName:["",[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
        adresse:["",[Validators.required , Validators.minLength(3), Validators.maxLength(50)]],
        section:[""],
      }
    )
  }
  search(){
    this.teachersService.searchTeachers(this.searchForm.value).subscribe(
      (response)=>{
        this.searche = response.searchTab;
        console.log("here search by teachers",this.searche);
        
      }
    )
  }

}
