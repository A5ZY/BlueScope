import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDetailsService } from '../services/user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError = '';
  signUpError = '';
  noData = '';
  constructor(private userDS: UserDetailsService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.valid) {
      const data = this.userDS.getUser();
      if (data) {
        const userDetail = JSON.parse(data);
        if (userDetail.email === this.loginForm.value.email && userDetail.password === this.loginForm.value.password) {
          this.router.navigate(['products'])
        } else {
          this.signUpError = '*Email or Password wrong!'
        }
      } else {
        this.noData = '*No users! Please Sign Up';
      }
    } else {
      this.loginError = '*Please fill the required inputs';
    }
  }
}
