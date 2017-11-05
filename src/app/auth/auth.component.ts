import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../shared/services/auth.service';
import { Errors } from '../shared/models/errors';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authType: String = '';
  title: String = '';
  autForm: FormGroup;
  errors: Errors = new Errors();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.autForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      this.authType = data[0].path;
      this.title = this.authType === 'login' ? 'Sign in' : 'Sign up';
      if (this.authType === 'registration') {
        this.autForm.addControl('username', new FormControl());
      }
    });
  }

  submitForm() {
    const credentials = this.autForm.value;
    console.log(credentials);
    this.authService.attemptAuth(this.authType, credentials)
      .subscribe(
        data => this.router.navigate(['/']),
        err => this.errors = err
      );
  }

}
