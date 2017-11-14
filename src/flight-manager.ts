import { Flight } from './flight';

export class FlightManager {

    private cache: Flight[];

    constructor(cache: Flight[]) {
        this.cache = cache;
    }

    search(from: string, to: string): Flight[] {
        let result = new Array<Flight>();
        for (let f of this.cache) {
            if (f.from === from && f.to === to) {
                result.push(f);
            }
        }
        return result;
    }

    // anonyme Funktion
    search2(from: string, to: string): Flight[] {
        let result: Flight[] = this.cache.filter(function(f: Flight){
            return f.from === from && f.to === to;
        });
        return result;
    }

    // Lambda Ausdruck
    search3(from: string, to: string): Flight[] {
        return this.cache.filter((f: Flight) => {
            return f.from === from && f.to === to;
        });
    }

    // gekürzter Lambda Ausdruck
    search4(from: string, to: string): Flight[] {
        return this.cache.filter(f => f.from === from && f.to === to);
    }
}
