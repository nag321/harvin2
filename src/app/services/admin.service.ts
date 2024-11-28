import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = '/api/admins';

  constructor(private http: HttpClient) {}

  registerAdmin(admin: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, admin);
  }

  getAdminById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateAdmin(id: number, admin: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/update`, admin);
  }

  changePassword(id: number, newPassword: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/change-password`, { newPassword });
  }

  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
