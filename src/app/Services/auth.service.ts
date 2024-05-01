import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  login(userName: string, password: string): Observable<any> {
    const loginData = { userName, password };
    return this.httpClient.post<any>('https://localhost:44308/api/Account/login', loginData);
    
  }
  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token; 
  }
}
