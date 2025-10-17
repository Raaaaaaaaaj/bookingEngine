import { Component, Input } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
@Component({
  selector: "app-basic-info",
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <h1>This is Basic Info</h1>
  `,
  styles: [`
    
  `]
})
export class BasicInfoComponent {
  @Input() parentForm!: FormGroup;
}
