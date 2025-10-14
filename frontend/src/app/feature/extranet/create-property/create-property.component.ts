import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-create-property',
  standalone: true,
  imports: [ButtonModule, StepperModule, CommonModule],
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent {
  currentStep = 1;
  steps = ["Basic Info", "Amenities", "Rooms", "Photos", "Policies"];

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
