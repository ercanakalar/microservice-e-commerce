import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user-model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {}

  signup(credentials: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    this.http
      .post<{ user: User; error: string[]; token: string; message: string  }>(
        'http://localhost:3001/api/users/signup',
        credentials
      )
      .subscribe(
        (data) => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err.error.errors);
        }
      );
  }

  signin(credentials: { email: string; password: string }) {
    this.http
      .post<{ user: User; error: string[]; token: string; message: string }>(
        'http://localhost:3001/api/users/signin',
        credentials
      )
      .subscribe(
        (data) => {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/']);
        },
        (err) => {
          console.log(err.error.errors);
        }
      );
  }
  logout() {
    this.http.post('http://localhost:3001/api/users/signout', {}).subscribe(
      (data) => {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err.error.errors);
      }
    );
  }
}
