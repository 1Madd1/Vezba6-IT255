import { Component, OnInit } from '@angular/core';
import { Ispit } from '../model/ispit';
import { MetService } from '../services/metService';

@Component({
  selector: 'app-ispiti',
  templateUrl: './ispiti.component.html',
  styleUrls: ['./ispiti.component.css']
})
export class IspitiComponent implements OnInit {

  ispiti: Ispit[] = [];
  constructor() {
    this.ispiti.splice(0);
    this.ispiti.push(new Ispit("CS230-JunB", 28, 30, 10, "05.07.2021"));
    this.ispiti.push(new Ispit("IT370-JunB", 25, 30, 10, "25.06.2021"));
    this.ispiti.push(new Ispit("IT350-JanA", 23.5, 30, 10, "28.01.2021"));
    this.ispiti.push(new Ispit("MA202-JunB", 28, 30, 10, "04.07.2021"));
  }

  ngOnInit(): void {
  }

}
