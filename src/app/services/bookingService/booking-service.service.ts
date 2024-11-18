import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingServiceService {
  apiUrl: string = 'https://genmax-production-ac88.up.railway.app/';
  constructor(private http: HttpClient) {}

  createBooking(data: any) {
    return this.http.post(this.apiUrl + 'bookings/create', data);
  }
}
