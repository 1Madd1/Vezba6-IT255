import { Component, OnInit } from '@angular/core';
import { Osoba } from '../model/osoba';

@Component({
  selector: 'app-lista-profesorai-studenata',
  templateUrl: './lista-profesorai-studenata.component.html',
  styleUrls: ['./lista-profesorai-studenata.component.css']
})
export class ListaProfesoraiStudenataComponent implements OnInit {

  constructor() { }

  osobe: Osoba[] = [];

  onStudenti() {
    this.osobe.splice(0);
    this.osobe.push(new Osoba("Djordje","Krstic", "Student", "Softverski Inzenjer"));
    this.osobe.push(new Osoba("Nikola","Becic", "Student", "Softverski Inzenjer"));
    this.osobe.push(new Osoba("Aleksa","Petrovic", "Student", "Graficki dizajner"));
  }

  onProfesori() {
    this.osobe.splice(0);
    this.osobe.push(new Osoba("Vladimir","Milicevic", "Profesor", "Softverski Inzenjer"));
    this.osobe.push(new Osoba("Dusan","Simljanovic", "Profesor", "Matematicar"));
    this.osobe.push(new Osoba("Jovana","Jovic", "Profesor", "Softverski Inzenjer"));
  }

  ngOnInit(): void {
  }

}
