
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectComponent } from '../../../../../../shared/components/ui/select/select.component';

@Component({
  selector: 'app-sleepingarrangements',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SelectComponent],
  template: `
        <form [formGroup]="mealPlanandInventory" class="row mealPlanandInventory mt-4">
        <!-- Meal Plan Selection -->
         <div class="col-md-4 text-left">
          <p>
            <b>1. Bed Typpe</b><br />
            Select the types of beds available in this room
          </p>
         </div>
         <div class="col-md-8">
          <app-select 
              id="bedType"
              [options]="bedType"
              arealabel= "Select Bed Type"
              formControlName="bedType">
          </app-select>
         </div>
         <!-- Extra Beds -->
          <div class="col-md-4 text-left">
            <p>
              <b>2. Can this room accomodate extra bed(s)?</b>
            </p>
          </div>
          <div class="col-md-8">
            <input 
            class="form-check-input"
            type="radio"
            [formControlName]="noextrabeds"
            [id]="noextrabeds"
            value="no"
            />
            <label for="noextrabeds">No</label>
          </div>
        </form>
    
  `,
  styles: ``,
})
export class SleepingarrangementsComponent{
  mealPlanandInventory: FormGroup<any> | undefined;

  bedType: any = [
    { label: "King Bed", value: "kingBed" },
    { label: "Queen Bed", value: "queenBed" },
    { label: "Twin Bed", value: "twinBed" },
    { label: "Single Bed", value: "singleBed" },
    { label: "Bunk Bed", value: "bunkBed" },
  ]
noextrabeds: any;
}
