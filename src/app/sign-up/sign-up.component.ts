import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDetailsService } from '../services/user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  signUpError = '';
  alreadyAdded = '';
  constructor(private userDS: UserDetailsService, private router: Router) {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }
  signUp() {
    if (this.signUpForm.valid) {
      const user = this.userDS.getUser();
      if (user) {
        const jsonData = JSON.parse(user);
        if (jsonData.email !== this.signUpForm.value.email) {
          const data = JSON.stringify(this.signUpForm.value);
          this.userDS.setUser(data);
          this.router.navigate(['/products']);
        } else {
          this.alreadyAdded = 'This email was already added';
        }
      }else{
        const data = JSON.stringify(this.signUpForm.value);
          this.userDS.setUser(data);
      }
    } else {
      this.signUpError = '*Please fill the required fields';
    }
  }
}
