import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-photos',
  imports: [ReactiveFormsModule],
  template: `<h1>This is Photos</h1>`
})
export class PhotosComponent {
  @Input() parentForm!: FormGroup;
}
