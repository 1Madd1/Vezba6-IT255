import { Component, OnInit } from '@angular/core';
import { Osoba } from '../model/osoba';

@Component({
  selector: 'app-studentcomponent',
  templateUrl: './studentcomponent.component.html',
  styleUrls: ['./studentcomponent.component.css']
})
export class StudentcomponentComponent implements OnInit {

  osoba: Osoba;

  constructor(){
    
  }

  addInfo(ime: HTMLInputElement, prezime: HTMLInputElement, titula: HTMLSelectElement, kvalifikacija: HTMLInputElement):boolean{
    this.osoba = new Osoba(ime.value, prezime.value, titula.value, kvalifikacija.value);
    return false;
  }

  ngOnInit(): void {
  }

}
