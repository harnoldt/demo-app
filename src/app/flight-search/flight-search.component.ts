import { Headers, Http, URLSearchParams } from '@angular/http';
import { Component } from '@angular/core';
import { Flight } from '../entities/flight';


@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent {

  from: string = 'München';
  to: string = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight;

  constructor(private http: Http) {

  }

  search() {
    let url = 'http://www.angular-akademie.com/api/flight';

    let headers = new Headers();
    headers.set('Accept', 'text/json');

    let search = new URLSearchParams();
    search.set('from', this.from);
    search.set('to', this.to);

    this.http
    .get(url, { headers, search })
    .map(resp => resp.json())
    .subscribe(
      flights => {
        this.flights = flights;
      },
      err => {
        console.error(err);
      }
    )
  }

  select(f: Flight) {
    this.selectedFlight = f;
  }

}
