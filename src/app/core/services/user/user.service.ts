import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environment';

import { interval, take, lastValueFrom } from 'rxjs';

// models
import { User } from '../../../core/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly BACKEND_URL = environment.baseUrl;

  constructor(
    public httpClient: HttpClient
  ) { 
  }

  getAllUsers({ api }: { api: string }) {
    return lastValueFrom(this.httpClient.get(`${this.BACKEND_URL}${api}`))
  }

  getUserById({ api }: { api: string }) {
    return this.httpClient.get<User>(`${this.BACKEND_URL}${api}`);
  }

  createUser({ api, user }: { api: string , user: User }) {
    return this.httpClient.post(`${this.BACKEND_URL}${api}`, user);
  }

  updateUser({ api, user }: { api: string , user: User }) {
    return this.httpClient.put<User>(`${this.BACKEND_URL}${api}`, user);
  }

}
