import { FlightManager } from './flight-manager';
import { Flight } from './flight';

let flights: Flight[] = [
    {
        id: 17,
        from: 'Graz',
        to: 'München',
        date: '2017-11-17'
    },
    {
        id: 18,
        from: 'Graz',
        to: 'München',
        date: '2017-11-17'
    },
    {
        id: 19,
        from: 'Graz',
        to: 'Mallorca',
        date: '2017-11-17'
    },
    {
        id: 20,
        from: 'Graz',
        to: 'München',
        date: '2017-11-17'
    }
];

let fm = new FlightManager (flights);
let result1 = fm.search('Graz', 'München');

for (let f of result1) {
    console.debug('flight', f);
}
