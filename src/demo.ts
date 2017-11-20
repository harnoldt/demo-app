import { FlightManager } from './flight-manager';
import { Flight } from './flight';

// tslint:disable:no-console
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

function showFlight(f: Flight): void {
    console.debug('---- Flight ----');
    console.debug('id: ', f.id);
    console.debug('from: ', f.from);
    console.debug('to: ', f.to);
    console.debug('date: ', f.date);
}

let f: Flight = {
    id: 1,
    from: 'Graz',
    to: 'München',
    date: '2018-11-01T17:00:00.00+01:00'
};

showFlight(f);

