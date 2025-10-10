import { Component, OnInit } from '@angular/core';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../../../../shared/components/input/input.component';
@Component({
    selector: 'app-rooms',
    imports: [StepperModule, ButtonModule, InputComponent, ReactiveFormsModule],
    template: `
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <app-input
        label="Username"
        [value]="loginForm.get('username')?.value"
        (valueChange)="loginForm.get('username')?.setValue($event)"
        [required]="true"
      ></app-input>

      <app-input
        label="Password"
        type="password"
        [value]="loginForm.get('password')?.value"
        (valueChange)="loginForm.get('password')?.setValue($event)"
        [required]="true"
      ></app-input>

      <button pButton type="submit" label="Login"></button>
    </form>
    `,
    styles: ``
})
export class RoomsComponent implements OnInit {
loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
