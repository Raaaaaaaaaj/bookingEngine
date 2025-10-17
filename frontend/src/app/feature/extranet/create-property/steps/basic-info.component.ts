import { Component, Input } from "@angular/core";
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { InputComponent } from "../../../../shared/components/input/input.component";
// import { SelectComponent } from "../../../../shared/components/select/select.component";
@Component({
  selector: "app-basic-info",
  imports: [ReactiveFormsModule, CommonModule, InputComponent],
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
        <p><b>1. Please fill Up your property name</b> <br>
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
        <p><b>1. Please fill Up your property name</b> <br>
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
    </form>
  </div>


  `,
  styles: [`
    
  `]
})
export class BasicInfoComponent {
  @Input() parentForm!: FormGroup;
  @Input() title!: string;
  basicInfoForm!: FormGroup
}
