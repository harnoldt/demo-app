import { AbstractAddress } from './abstract-address';
// tslint:disable:no-console

class CompanyAddress extends AbstractAddress {
    companyName: string;

    toCSV() {
        return `${this.id};${this.companyName};${this.street};${this.zipCode};${this.city}`;
    }
}

let a1 = new CompanyAddress(1);
a1.id = 1;
a1.city = 'Graz';
a1.street = 'Hier';
a1.zipCode = '8010';
a1.companyName = 'Steh & Schau GmbH';

console.debug('a1 as CSV: ', a1.toCSV());
console.debug('a1 as full Address: ', a1.fullAdress());

// Zugriff auf eine Basisklasse

class PrivateAddress extends AbstractAddress {
    firstName: string;
    lastName: string;

    constructor() {
        super(0);
    }

    fullAdress() {
        return this.firstName + ' ' + this.lastName + ', ' + super.fullAdress();
    }

    toCSV() {
        return `${this.id};${this.firstName};${this.lastName};${this.street};${this.zipCode};${this.city}`;
    }
}

let a2 = new PrivateAddress;
a2.firstName = 'Heike';
a2.lastName = 'Arnoldt';
a2.id = 2;
a2.city = 'Graz';
a2.street = 'Hier';
a2.zipCode = '8010';

console.debug('a2 as CSV: ', a2.toCSV());
console.debug('a2 as full Address: ', a2.fullAdress());
