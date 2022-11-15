export class Osoba {
    ime: string;
    prezime: string;
    titula: string;
    kvalifikacija: string;
    
    constructor(ime: string, prezime: string, titula: string, kvalifikacija: string) {
        this.ime = ime;
        this.prezime = prezime;
        this.titula = titula;
        this.kvalifikacija = kvalifikacija;
    }
}