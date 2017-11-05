import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { User } from '../models/user';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { AuthService } from './auth.service';


@Injectable()
export class UserService {
  $isLoading = new ReplaySubject<boolean>(1);

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private jwtService: JwtService
  ) { }

  populate() {
    if (this.jwtService.getToken()) {
      this.apiService.get('/user')
        .subscribe(
          data => {
            this.authService.setAuth(data.user);
            this.$isLoading.next(false);
          },
          err => {
            this.authService.logout();
            this.$isLoading.next(false);
          }
        );
    } else {
      this.authService.logout();
      this.$isLoading.next(false);
    }
  }

  getCurrentUser(): User {
    return this.authService.currentUser.value;
  }

  update(user): Observable<User> {
    return this.apiService
      .put('/user', { user })
      .map(data => {
        this.authService.currentUser.next(data.user);
        return data.user;
      });
  }

}
