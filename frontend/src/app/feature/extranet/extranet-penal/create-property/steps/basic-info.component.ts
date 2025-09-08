import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { SelectComponent } from "../../../../../shared/components/select/select.component";

@Component({
  selector: "app-basic-info",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SelectComponent],
  template: `
    <section id="basic-info" aria-labelledby="basic-info-title">
      <div class="container">
        <div class="sectionHead text-center">
          <h1 id="basic-info-title">Basic Info</h1>
        </div>

        <div class="row">
          <div class="col-12 d-flex justify-content-center basicInfoForm">
            <div class="card" role="group" aria-labelledby="property-details-title">
              
              <h2 id="property-details-title">Property Details</h2>
              <p class="subtitle">Update your property details here</p>

              <form [formGroup]="basicInfo">
                <div class="grid" role="presentation">

                  <!-- Property Name -->
                  <div class="label">
                    <div class="title">Name of the Property</div>
                    <div class="hint">Enter the name as on the property documents</div>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="propertyName"
                      formControlName="propertyName"
                      placeholder="Property Name"
                      [class.is-invalid]="basicInfo.get('propertyName')?.invalid && basicInfo.get('propertyName')?.touched"
                    />
                    <div *ngIf="basicInfo.get('propertyName')?.invalid && basicInfo.get('propertyName')?.touched">
                      <small class="text-danger">Name is required (min 10 chars).</small>
                    </div>
                  </div>

                  <!-- Hotel Star Rating -->
                  <div class="label">
                    <div class="title">Hotel Star Rating</div>
                  </div>
                  <div>
                    <app-select
                      formControlName="starRating"
                      [options]="hotelStars"
                      optionLabel="label"
                      optionValue="value"
                      arealabel="Hotel Star Rating">
                    </app-select>
                    <div *ngIf="basicInfo.get('starRating')?.invalid && basicInfo.get('starRating')?.touched">
                      <small class="text-danger">Star rating is required.</small>
                    </div>
                  </div>

                  <!-- Property Built Year -->
                  <div class="label">
                    <div class="title">When was the property built?</div>
                  </div>
                  <div>
                    <app-select
                      formControlName="propBuiltOn"
                      [options]="years"
                      optionLabel="label"
                      optionValue="value"
                      arealabel="Select Year">
                    </app-select>
                    <div *ngIf="basicInfo.get('propBuiltOn')?.invalid && basicInfo.get('propBuiltOn')?.touched">
                      <small class="text-danger">Year is required.</small>
                    </div>
                  </div>

                  <!-- Channel Manager -->
                  <div class="label">
                    <div class="title">Do you work with channel manager?</div>
                    <div class="hint">This allows updating inventory across travel platforms</div>
                  </div>
                    <div class="radio-row" role="radiogroup">
  <label>
    <input type="radio" name="workWithCM" value="no" formControlName="workWithCM" />
    <span>No</span>
  </label>
  <label>
    <input type="radio" name="workWithCM" value="yes" formControlName="workWithCM" />
    <span>Yes</span>
  </label>
</div>
                    <div *ngIf="basicInfo.get('workWithCM')?.invalid && basicInfo.get('workWithCM')?.touched">
                      <small class="text-danger">Please select an option.</small>
                    </div>

                  <!-- Property Email -->
                  <div class="label">
                    <div class="title">Property Email Id</div>
                  </div>
                  <div>
                    <input
                      type="email"
                      id="propertyEmail"
                      formControlName="propertyEmail"
                      placeholder="Property Email Id"
                      [class.is-invalid]="basicInfo.get('propertyEmail')?.invalid && basicInfo.get('propertyEmail')?.touched"
                    />
                    <div *ngIf="basicInfo.get('propertyEmail')?.invalid && basicInfo.get('propertyEmail')?.touched">
                      <small class="text-danger">Valid Email Id is required.</small>
                    </div>
                  </div>

                  <!-- Property Phone -->
                  <div class="label">
                    <div class="title">Property Mobile No.</div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      id="propertyPhone"
                      formControlName="propertyPhone"
                      placeholder="Property Mobile No"
                      [class.is-invalid]="basicInfo.get('propertyPhone')?.invalid && basicInfo.get('propertyPhone')?.touched"
                    />
                    <div *ngIf="basicInfo.get('propertyPhone')?.invalid && basicInfo.get('propertyPhone')?.touched">
                      <small class="text-danger">Valid 10 digit number required.</small>
                    </div>
                  </div>

                </div>

                <!-- Submit Button -->
                <div class="d-flex align-items-center justify-content-end mt-3">
                  <button class="btn btn-danger w-25" [disabled]="basicInfo.invalid">Submit</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    #basic-info .card {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 6px 20px rgba(18, 25, 34, 0.06);
      padding: 22px;
      margin: 20px auto;
      border: 1px solid #eee;
      height: 485px;
      overflow-y: auto;
    }
    #basic-info h1 {
      font-size: 28px;
      margin-bottom: 12px;
      font-weight: 800;
    }
    #basic-info .card h2 {
      font-size: 20px;
      margin-bottom: 10px;
      font-weight: 700;
      color: #333;
    }
    #basic-info .subtitle {
      color: #7b7b85;
      margin-bottom: 18px;
      font-size: 13px;
    }
    #basic-info .grid {
      display: grid;
      grid-template-columns: 1fr 420px;
      gap: 18px 28px;
      align-items: center;
    }
    #basic-info .label .title {
      font-weight: 600;
      margin-bottom: 6px;
      color: #111;
    }
    #basic-info .label .hint {
      font-size: 13px;
      color: #7d7d86;
    }
    #basic-info input,
    #basic-info select {
      width: 100%;
      padding: 12px 14px;
      border-radius: 10px;
      border: 1px solid #ddd;
      font-size: 14px;
      outline: none;
      box-sizing: border-box;
      background: #fff;
    }
    #basic-info input:focus,
    #basic-info select:focus {
      border-color: #3fb27c;
      box-shadow: 0 0 0 3px #6cf3b4b4;
    }
    #basic-info .radio-row {
      display: flex;
      gap: 18px;
      align-items: center;
    }
    #basic-info .radio-row label {
      display: flex;
      gap: 8px;
      align-items: center;
      font-weight: 600;
      color: #333;
      cursor: pointer;
    }
    @media (max-width: 860px) {
      #basic-info .grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class BasicInfoComponent {
  years = Array.from({ length: 60 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return { value: year.toString(), label: year.toString() };
  });

  hotelStars = [
    { value: "1", label: "1 Star" },
    { value: "2", label: "2 Star" },
    { value: "3", label: "3 Star" },
    { value: "4", label: "4 Star" },
    { value: "5", label: "5 Star" },
  ];

  basicInfo = new FormGroup({
    propertyName: new FormControl("", [Validators.required, Validators.minLength(10)]),
    starRating: new FormControl("", Validators.required),
    propBuiltOn: new FormControl("", Validators.required),
    workWithCM: new FormControl("", Validators.required),
    propertyEmail: new FormControl("", [Validators.required, Validators.email]),
    propertyPhone: new FormControl("", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
  });
}
