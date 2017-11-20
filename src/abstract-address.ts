export abstract class AbstractAddress {
    id: number;
    street: string;
    zipCode: string;
    city: string;

    constructor(id: number) {
        this.id = id;
    }

    fullAdress() {
        return this.street + ', ' + this.zipCode + ' ' + this.city;
    }

    abstract toCSV(): string;
}
