import { Component, OnInit } from '@angular/core';
import { Studije } from '../model/studije';
import { MetService } from '../services/metService';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})

export class DiComponent implements OnInit {

  constructor(private metService: MetService) {
    this.metService = metService;
  }

  st: Studije = this.metService.getStudije();

  ngOnInit(): void {
  }

}
