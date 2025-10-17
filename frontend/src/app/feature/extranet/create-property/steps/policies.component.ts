import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-policies',
  imports: [ReactiveFormsModule, CommonModule],
  template: `<h1>This is Policies</h1>`
})
export class PoliciesComponent {
  @Input() parentForm!: FormGroup;
}
