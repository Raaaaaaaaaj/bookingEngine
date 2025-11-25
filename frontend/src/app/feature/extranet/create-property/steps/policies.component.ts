import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-policies',
  imports: [ReactiveFormsModule],
  template: `<h1>This is Policies</h1>`
})
export class PoliciesComponent {
  @Input() parentForm!: FormGroup;
}
