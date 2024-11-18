import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  apiUrl: string = 'https://genmax-production-ac88.up.railway.app/auth/';
  constructor(private http: HttpClient) {}

  signUp(data: any) {
    return this.http.post(this.apiUrl + 'signup', data);
  }
  logIn(data: any) {
    return this.http.post(this.apiUrl + 'signin', data);
  }
}
