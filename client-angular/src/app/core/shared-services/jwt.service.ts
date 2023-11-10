import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private token: string | null = '';

  constructor() {}

  isTokenExpired() {
    this.token = localStorage.getItem('token');
    if (!this.token) {
      return false;
    }
    const tokenData = JSON.parse(atob(this.token.split('.')[1]));
    const expirationDate = new Date(tokenData.exp * 1000);
    const now = new Date();
    if (now > expirationDate) {
      localStorage.removeItem('token');
      return false;
    }
    return true;
  }
}
