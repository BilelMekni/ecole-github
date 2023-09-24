import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul-note',
  templateUrl: './calcul-note.component.html',
  styleUrls: ['./calcul-note.component.css']
})
export class CalculNoteComponent implements OnInit {
  notes: number[] = [];
  coefficients: number[] = [];
  moyenne: number = 0;

  constructor() { }

  ngOnInit() {
  }

  calculerMoyenne() {
    let sommeNotes = 0;
    let sommeCoefficients = 0;
  
    for (let i = 0; i < this.notes.length; i++) {
      sommeNotes += this.notes[i] * this.coefficients[i];
      sommeCoefficients += this.coefficients[i];
    }
  
    this.moyenne = sommeNotes / sommeCoefficients;
  }

}
