import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClient } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
const registerUserUrl = `${environment.apiUrl}/register`;


@Component({
  selector: 'app-register',
  imports: [FormsModule, PasswordModule, InputTextModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [MessageService]
})
export class RegisterComponent {
  value!: string;
  registerUser() {
    alert("Registered");
  }
}
