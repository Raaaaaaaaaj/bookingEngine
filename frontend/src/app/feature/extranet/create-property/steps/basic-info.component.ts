import { Component, Input, OnInit } from "@angular/core";
import {
  FormGroup,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormsModule
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Checkbox } from "primeng/checkbox";
import { InputComponent } from "../../../../shared/components/input/input.component";
import { SelectComponent } from "../../../../shared/components/select/select.component";
@Component({
  selector: "app-basic-info",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    InputComponent,
    SelectComponent,
    // Checkbox,
    FormsModule
  ],
  template: `
    <div
      class="row d-flex align-items-center flex-column justify-content-center"
    >
      <div class="stepHeader text-center text-decoration-underline">
        <h4>Please fill the {{ title }} form</h4>
      </div>
      <form [formGroup]="basicInfoForm" class="row basicInfoForm mt-4">

        <!-- Hotel Name -->
        <div class="col-md-4 text-left">
          <p>
            <b>1. Property name</b> <br />
            (It will be visible on MMT)
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

        <!-- Hotel Star Rating -->
        <div class="col-md-4 text-left">
          <p><b>2. Hotel Star Rating</b> <br /></p>
        </div>
        <div class="col-md-8 mb-4">
          <app-select
            id="hotelStarRating"
            [options]="starRatingOptions"
            arealabel="Select Star Rating"
          ></app-select>
        </div>

        <hr />

        <!-- Hotel Email Adress -->
        <div class="col-md-4 text-left">
          <p>
            <b>3. Email Id</b><br />
            (Guests will receive mails from this mail id)
          </p>
        </div>
        <div class="col-md-8 mb-4 position-relative">
          <app-input
            formControlName="email" 
            (input)="onEmailChange()"
            placeholder="Enter your email"
          ></app-input>

          <!-- Verify button appears dynamically -->
          <span class="position-absolute end-0 top-0 mt-2 me-4" (click)="verifyEmail()"> Verify </span>

          <small *ngIf="basicInfoForm.get('email')?.invalid && basicInfoForm.get('email')?.touched" class="text-danger">
  Please enter a valid email.
</small>
        </div>

        <!-- Hotel Phone Number -->

      </form>
    </div>
  `,
  styles: [`
    .position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}

.end-0 {
  right: 0;
}

.top-0 {
  top: 0;
}

.pe-5 {
  padding-right: 5rem;
}  
  `],
})
export class BasicInfoComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  @Input() title!: string;
  basicInfoForm!: FormGroup; //Declare the property
  email: string = '';
  phone: string = '';

  constructor(private fb: FormBuilder) {} // 2. Inject FormBuilder

  ngOnInit(): void {
    // 3. Initialize the FormGroup here
    this.basicInfoForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
    });
  }


  starRatingOptions: any = [
    { label: "1 Star", value: 1 },
    { label: "2 Star", value: 2 },
    { label: "3 Star", value: 3 },
    { label: "4 Star", value: 4 },
    { label: "5 Star", value: 5 },
  ];

  size: any = null;

  onEmailChange(){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  }

  verifyEmail(){
    console.log('Verifying email:', this.email);    
    alert('Verification Link Sent to ' + this.email);
  }
}
