import { Component, Input } from "@angular/core";
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { InputComponent } from "../../../../shared/components/input/input.component";
import { SelectComponent } from "../../../../shared/components/select/select.component";
@Component({
  selector: "app-basic-info",
  imports: [ReactiveFormsModule, CommonModule, InputComponent, SelectComponent],
  template: `
  <div class="row d-flex align-items-center flex-column justify-content-center">
  <div class="stepHeader text-center text-decoration-underline">
    <h4>Please fill the {{title}} form</h4>
  </div>
    <form
      [formGroup]="basicInfoForm"
      class="row basicInfoForm mt-4"
    >
      <div class="col-md-4 text-left">
        <p><b>1. Property name</b> <br>
          (It will be visible on MMt)
        </p>
      </div>
      <div class="col-md-8">
        <app-input
          id="hotelName"
          type="text"
          label="Hotel Name"
          [required]="true"
        ></app-input>
      </div>

      <div class="col-md-4 text-left">
        <p><b>2. Hotel Star Rating</b> <br>
        </p>
      </div>
      <div class="col-md-8 mb-4">
        <app-select 
          id="hotelStarRating"
          [options]="starRatingOptions"
          arealabel="Select Star Rating"
        ></app-select>
      </div>
      <hr>

      <div class="col-md-4 text-left">
        <p><b>3. Email Id</b> <br>
        </p>
      </div>
      <div class="col-md-8 mb-4">
        <app-input 
          id="hotelStarRating"
          arealabel="Select Star Rating"
        ></app-input>
      </div>
    </form>
  </div>


  `,
  styles: [`
    
  `]
})
export class BasicInfoComponent {
  @Input() parentForm!: FormGroup;
  @Input() title!: string;
  basicInfoForm!: FormGroup;

  starRatingOptions: any = [
    { label: "1 Star", value: 1 },
    { label: "2 Star", value: 2 },
    { label: "3 Star", value: 3 },
    { label: "4 Star", value: 4 },
    { label: "5 Star", value: 5 },
  ]
}
