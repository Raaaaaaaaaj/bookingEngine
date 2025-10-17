import { Component, Input } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
@Component({
  selector: "app-amenities",
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  <h1>This is Amenities</h1>
`,
  styles: [`
`]
})
export class AmenitiesComponent {
  @Input() parentForm!: FormGroup;
}
