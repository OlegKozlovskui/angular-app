import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable()
export class AuthService {
  currentUser = new BehaviorSubject<User>(new User());
  isAuthenticated = new ReplaySubject<boolean>(1);

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService,
    private router: Router
  ) { }

  setAuth(user: User) {
    this.jwtService.setToken(user.token);
    this.isAuthenticated.next(true);
    this.currentUser.next(user);
  }

  logout() {
    this.jwtService.removeToken();
    this.isAuthenticated.next(false);
    this.currentUser.next(new User());
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = type === 'login' ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
      .map(data => {
        this.setAuth(data.user);
        return data;
      });
  }

}
