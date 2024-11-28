import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:8080/api/auth'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // POST: Login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, credentials);
  }

  // POST: Logout (Optional)
  logout(): Observable<any> {
    return this.http.post(`${this.authUrl}/logout`, {});
  }
}
