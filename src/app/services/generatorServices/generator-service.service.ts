import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GeneratorServiceService {
  apiUrl: string = 'https://genmax-production-ac88.up.railway.app/';
  constructor(private http: HttpClient) {}

  getGeneratorData() {
    return this.http.get(this.apiUrl + 'gen-with-booking');
  }

  getAvailableGenerator(startDate: string, endDate: string, capacity: string) {
    return this.http.get(
      this.apiUrl +
        `bookings/availability?startDate=${startDate}&endDate=${endDate}&capacity=GEN.${capacity}KVA`
    );
  }

  getAvalableDates(serailNumber: string) {
    return this.http.get(
      this.apiUrl + `bookings/availableDates?serailNumber=${serailNumber}`
    );
  }
}
