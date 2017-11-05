import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading = true;
  
  constructor(private userService: UserService) {}

  ngOnInit() {
    
    console.log(777);
    this.userService.populate();
    
    this.userService.$isLoading.subscribe(data => {
      console.log('DATA', data);
      this.isLoading = data;
    })
  }
}
