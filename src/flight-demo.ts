import { Flight, ScheduledFlight, CharterFlight } from './flight';

// Austauschen von Objekten

console.debug('--- Austauschen von Objekten ---');

let sf: Flight = new ScheduledFlight();
sf.distance = 1000;
console.debug('Preis SF: ', sf.calcPrice());

let cf = new CharterFlight();
cf.distance = 1000;
console.debug('Preis CF: ', cf.calcPrice());

// Polymorhpe Behandlung zweier Auprägungen von Flight

let scheduledFlight: Flight = new ScheduledFlight();
scheduledFlight.distance = 1000;

let charterFlight: Flight = new CharterFlight();
charterFlight.distance = 1000;

let flights: Flight[] = [scheduledFlight, charterFlight];

console.debug('--- Imperative Variante ---');

for (let f of flights) {
    if (f.calcPrice) {
        console.debug('Preis: ', f.calcPrice());
    }
}

class Person {
    id: number;
    firstName: string;
    lastName: string;

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

class Passenger extends Person {
    passengerStatus: string;
}

class Pilot extends Person {
    licenseNumber: String;
}

let person1: Person = new Passenger();
person1.firstName = 'Max';
person1.lastName = 'Muster';
let status = person1.pass

let person2: Person = new Pilot();
person2.firstName = 'Jens';
person2.lastName = 'Wolkenmeyer';

let isPerson = person1 instanceof Person; // true
let isPassenger = person1 instanceof Passenger; // true
let isPilot = person1 instanceof Pilot; // false

console.debug('isPerson ', isPerson);
console.debug('isPilot ', isPilot);
console.debug('isPassenger ', isPassenger);

