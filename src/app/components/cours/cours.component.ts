import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  @Input() inputCours :any;

  constructor() { }

  ngOnInit() {
  }

}
