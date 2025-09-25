import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
// import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClient } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProgressSpinner } from 'primeng/progressspinner';
const registerUserUrl = `${environment.apiUrl}/register`;

  @Component({
  selector: 'app-register',
  imports: [FormsModule, PasswordModule, InputTextModule, CommonModule, ToastModule, ProgressSpinner],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [MessageService]
})
export class RegisterComponent {
  spinner: boolean = false;
  value!: string;
  user = {
    userName: '',
    userMail: '',
    userPhone: '',
    userPass: '',
    // confirmPassword: ''
  }
  constructor(private http: HttpClient, private messageService: MessageService, private router: Router) { }
  registerUser() {
    this.spinner = true;
    console.log("Hit");

    this.http.post(registerUserUrl, this.user).subscribe({
      next: (res: any) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Account Created Successfully'
        });
        this.user = {
          userName: '',
          userMail: '',
          userPhone: '',
          userPass: ''
          // confirmPassword: ''
        };
        setTimeout(() => {
          this.router.navigate(['/admin/login'])
        }, 1700)

        this.spinner = false;
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.message || 'Something went wrong'
        })
        this.spinner = false;
      }
    })
  }
}
