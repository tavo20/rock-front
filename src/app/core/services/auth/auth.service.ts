import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
	private baseURL = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) {
    console.log('AuthService constructor', this.baseURL);
  }


  public login(user: string, password: string) {
    return this.http.post(`${this.baseURL}api/auth/login`, { user, password },
    //{ observe: 'response',  }
    );
  }

  public saveTokenUser(token: string, user: any) {
    localStorage.setItem('token', token);
    delete user.token
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

}
