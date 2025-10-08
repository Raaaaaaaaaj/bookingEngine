import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { BasicInfoComponent } from "./steps/basic-info.component";
import { AmenitiesComponent } from "./steps/amenities.component";
import { PhotosComponent } from "./steps/photos.component";
import { RoomsComponent } from "./steps/rooms.component";
import { PoliciesComponent } from "./steps/policies.component";
@Component({
  selector: 'app-create-property',
  standalone: true,
  imports: [RouterModule, ButtonModule, StepperModule, CommonModule, BasicInfoComponent, AmenitiesComponent, PhotosComponent, RoomsComponent, PoliciesComponent],
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  currentStep = 0;

  steps = [
    { label: 'Basic Info', route: 'basic-info' },
    { label: 'Amenities', route: 'amenities' },
    { label: 'Rooms', route: 'rooms' },
    { label: 'Photos', route: 'photos' },
    { label: 'Policies', route: 'plocies' }
  ];

  goToStep(index: number) {
    this.currentStep = index;
    this.router.navigate([this.steps[index].route], { relativeTo: this.route });
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
