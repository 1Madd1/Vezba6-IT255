export class Ispit {
    naziv: string;
    brPoena: number;
    maxPoena: number;
    ocena: number;
    datumPolaganja: string;
    
    constructor(naziv: string, brPoena: number, maxPoena: number, ocena: number, datumPolaganja: string) {
        this.naziv = naziv;
        this.brPoena = brPoena;
        this.maxPoena = maxPoena;
        this.ocena = ocena;
        this.datumPolaganja = datumPolaganja;
    }
}