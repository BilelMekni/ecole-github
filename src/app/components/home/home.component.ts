import { Component, OnInit } from '@angular/core';
import { Noteeleve } from './../../interfaces/noteeleve';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noteeleve: Noteeleve = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: 'assets/example-house.jpg',
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
  constructor() { }

  ngOnInit() {
  }

}
