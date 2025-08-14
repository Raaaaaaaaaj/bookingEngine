import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
const loginUrl = `${environment.apiUrl}/login`;

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ToastModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService]
})
export class LoginComponent {
  showPassword: boolean = false;
  constructor(
    private http: HttpClient,
    private router: Router,
    private messageservice: MessageService
  ) { }
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
      console.log(payload)
      this.http.post(loginUrl, payload).subscribe({
        next: (res: any) => {
          this.messageservice.add({
            severity: 'success',
            summary: res.messgae || 'Login Success',
            detail: 'Getting You There!'
          });
          // Resets the form
          this.Loginform.reset();
          setTimeout(() => {
            this.router.navigate(['/admin/dashboard'])
          }, 1700)
        },
        error: (err) => {
          this.messageservice.add({
            severity: 'error',
            summary: 'Login Failed',
            detail: err.error?.message || 'Invalid Credentials!'
          })
        },
        complete: () => { console.info('Process Completed!') }
      });
    }
    else {
      this.messageservice.add({
        severity: 'warn',
        summary: 'Form Invalid',
        detail: "Please fill in all required details"
      })
    }
    // alert("Logged in")
  }
}
