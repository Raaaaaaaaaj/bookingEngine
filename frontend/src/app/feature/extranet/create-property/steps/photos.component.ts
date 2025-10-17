import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-photos',
  imports: [ReactiveFormsModule, CommonModule],
  template: `<h1>This is Photos</h1>`
})
export class PhotosComponent {
  @Input() parentForm!: FormGroup;
}
