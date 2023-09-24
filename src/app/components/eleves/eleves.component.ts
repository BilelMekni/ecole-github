import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {
  @Input() Inputeleve:any;

  constructor() { }

  ngOnInit() {
  }

}
