import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl = 'http://localhost:8080/api/student'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // POST: Register a new student
  registerStudent(student: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, student);
  }

  // GET: Fetch student profile
  getStudentProfile(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile`);
  }

  // PUT: Update student profile
  updateStudentProfile(student: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/profile`, student);
  }

  // DELETE: Delete student profile (Optional)
  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
