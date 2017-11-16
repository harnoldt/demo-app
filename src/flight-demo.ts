import { Flight, ScheduledFlight, CharterFlight } from './flight';

/* Austauschen von Objekten



*/
console.debug('--- Austauschen von Objekten ---');
let sf: Flight = new ScheduledFlight();
sf.distance = 1000;
console.debug('Preis SF: ', sf.calcPrice());

let cf = new CharterFlight();
cf.distance = 1000;
console.debug('Preis CF: ', cf.calcPrice());

// Polymorhpe Behanlung zweier Auprägungen von Flight

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
