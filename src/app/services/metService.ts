import { Injectable } from "@angular/core";
import { Ispit } from "../model/ispit";
import { Studije } from "../model/studije";

@Injectable()
export class MetService {

    constructor (private studije : Studije){
        this.studije = studije;
    }

    getStudije(): Studije {
        this.studije.naziv = "OAS";
        this.studije.trajanje = 4;
        this.studije.espb = 240;
        return this.studije;
    }
}