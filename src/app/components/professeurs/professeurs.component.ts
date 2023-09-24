import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-professeurs',
  templateUrl: './professeurs.component.html',
  styleUrls: ['./professeurs.component.css']
})
export class ProfesseursComponent implements OnInit {
  @Input() inputProf : any;

  constructor() { }

  ngOnInit() {
  }

}
