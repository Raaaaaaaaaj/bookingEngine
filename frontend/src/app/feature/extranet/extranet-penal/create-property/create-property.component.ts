import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-create-property',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent {
  currentStep = 0;

  steps = [
    { label: 'Basic Info' },
    { label: 'Location' },
    { label: 'Amenities' },
    { label: 'Rooms' },
    { label: 'Photos' },
    { label: 'Policies' }
  ];

  goToStep(index: number) {
    this.currentStep = index;
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    } else {
      console.log("Form Submitted");
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
