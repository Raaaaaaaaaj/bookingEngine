import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BasicInfoComponent } from './steps/basic-info.component';
import { AmenitiesComponent } from './steps/amenities.component';
import { RoomsComponent } from './steps/roomData/rooms.component';
import { PhotosComponent } from './steps/photos.component';
import { PoliciesComponent } from './steps/policies.component';
@Component({
  selector: 'app-create-property',
  standalone: true,
  imports: [
    ButtonModule,
    StepperModule,
    CommonModule,
    BasicInfoComponent,
    AmenitiesComponent,
    RoomsComponent,
    PhotosComponent,
    PoliciesComponent
  ],
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.css']
})
export class CreatePropertyComponent implements OnInit {
  currentStep = 1; //To mark steps
  mainForm!: FormGroup; //Initialize the parent Formgroup
  steps = ["Basic Info", "Amenities", "Rooms", "Photos", "Policies"]; //Steps
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.mainForm = this.fb.group({ //Decrale formgroup
      basicInfo: this.fb.group({}),
      amenities: this.fb.group({}),
      rooms: this.fb.group({}),
      gallery: this.fb.group({}),
      policies: this.fb.group({}),
    })
  }
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

  onSubmit() {
    console.log(this.mainForm.value) //Console the value
  }
}
