import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
const loginUrl = 'http://localhost:3000/api/login';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // isDisabled: boolean = true;
  constructor(private http: HttpClient) { }
  Loginform = new FormGroup({
    userMail: new FormControl('', [Validators.required, Validators.email]),
    userPass: new FormControl('', [Validators.required, Validators.minLength(4)])
  })
  get isDisabled() {
    return this.Loginform.invalid
  }

  login() {
    if (this.Loginform.valid) {
      const payload = this.Loginform.value;
      this.http.post(loginUrl, payload).subscribe(
        res => {
          console.log("Success")
        },
        err => {
          console.log("Failed")
        }
      );
    }
  }
}
