import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {
  @Input() inputdirectives : any;

  constructor() { }

  ngOnInit() {
  }

}
