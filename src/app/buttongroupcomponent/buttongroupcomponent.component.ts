import { Component, OnInit } from '@angular/core';
import { Studije } from '../model/studije';

@Component({
  selector: 'app-buttongroupcomponent',
  templateUrl: './buttongroupcomponent.component.html',
  styleUrls: ['./buttongroupcomponent.component.css']
})
export class ButtongroupcomponentComponent implements OnInit {

  constructor() { }

  studije: Studije = new Studije();

  onOas(){
    this.studije.naziv = "Osnovne akademske studije";
    this.studije.trajanje = 4;
    this.studije.espb = 240;
  }

  onMas(){
    this.studije.naziv = "Master akademske studije";
    this.studije.trajanje = 1;
    this.studije.espb = 60;
  }

  onDs(){
    this.studije.naziv = "Doktorske akademske studije";
    this.studije.trajanje = 3;
    this.studije.espb = 180;
  }

  ngOnInit(): void {
  }

}
