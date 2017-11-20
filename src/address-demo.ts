import { AbstractAddress } from './abstract-address';

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

// tslint:disable:no-console
console.debug('a1 as CSV: ', a1.toCSV());
console.debug('a1 as full Address: ', a1.fullAdress());
