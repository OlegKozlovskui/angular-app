import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(data => {
      console.log('currentUser', data);
      this.userName = data.username;
    })
  }

  logout() {
    this.authService.logout();
  }

}
