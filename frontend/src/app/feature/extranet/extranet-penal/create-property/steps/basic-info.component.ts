import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { SelectComponent } from "../../../../../shared/components/select/select.component";
@Component({
  selector: "app-basic-info",
  standalone: true,
  imports: [ReactiveFormsModule, SelectComponent],
  template: `
    <section
      id="basic-info"
      aria-labelledby="basic-info-title">
      <div class="container">
        <div class="sectionHead text-center">
          <h1 id="basic-info-title">Basic Info</h1>
        </div>
        <div class="row">
          <div class="col-12 d-flex justify-content-center basicInfoForm">
            <div
              class="card"
              role="group"
              aria-labelledby="property-details-title">
              <h2 id="property-details-title">Property Details</h2>
              <p class="subtitle">Update your property details here</p>
              <form [formGroup]="basicInfo">
                <div class="grid" role="presentation">
                  <div class="label">
                    <div class="title">Name of the Property</div>
                    <div class="hint">
                      Enter the name as on the property documents
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      formControlName="propertyName"
                      id="propertyName"
                      placeholder="Property Name" />
                  </div>
                  <div class="label">
                    <div class="title">Hotel Star Rating</div>
                  </div>
                  <div>
                    <app-select 
                      [options]="hotelstars" 
                      [selected]="selectedstar"
                      optionLabel="label"
                      optionValue="value"
                      arealabel="Hotel Star Rating"
                      (selectionChange)="onStarChange($event)">
                    </app-select>
                  </div>
                  <div class="label">
                    <div class="title">When was the property built?</div>
                    <div class="hint">&nbsp;</div>
                  </div>
                  <div>
                    <app-select 
                      [options]="years" 
                      [selected]="selectedYear"
                      optionLabel="label"
                      optionValue="value"
                      arealabel="Select Year"
                      (selectionChange)="onYearChange($event)">
                    </app-select>
                  </div>
                  <div class="label">
                    <div class="title">Do you work with channel manager?</div>
                    <div class="hint">
                      This allows to update inventory across different travel
                      platforms
                    </div>
                  </div>
                  <div>
                    <div
                      class="radio-row"
                      role="radiogroup"
                      aria-label="Do you work with channel manager">
                      <label>
                        <input
                          type="radio"
                          name="channel_manager"
                          value="no"
                          checked/>
                        <span>No</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="channel_manager"
                          value="yes"/>
                        <span>Yes</span>
                      </label>
                    </div>
                  </div>
                  <div class="label">
                    <div class="title">Property Email Id</div>
                  </div>
                  <div>
                       <input
                      type="text"
                      formControlName="propertyEmail"
                      id="propertyEmail"
                      placeholder="Property Email Id" />
                  </div>
                  <div class="label">
                    <div class="title">Property Mobile No.</div>
                  </div>
                  <div>
                       <input
                      type="number"
                      formControlName="propertyNum"
                      id="propertyNum"
                      placeholder="Property Mobile No" />
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-end mt-3">
                <button class="btn btn-danger w-25">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    #basic-info .card {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 6px 20px rgba(18, 25, 34, 0.06);
      padding: 22px;
      margin: 20px auto; /* yaha auto center karega */
      border: 1px solid #eee;
      height: 485px;
      overflow-y: scroll;
    }
    #basic-info h1 {
      font-size: 28px;
      margin: 0 0 12px;
      font-weight: 800;
    }
    #basic-info .card h2 {
      font-size: 20px;
      margin: 0 0 10px;
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
    #basic-info .row {
      padding: 14px 0;
      border-top: 1px solid #f0f0f0;
      display: contents;
    }
    #basic-info .label {
      padding-right: 10px;
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
    #basic-info input[type="text"],
    #basic-info input[type="number"],
    #basic-info input[type="email"],
    #basic-info input[type="tel"],
    #basic-info input[type="password"],
    #basic-info input[type="url"],
    #basic-info input[type="search"],
    #basic-info input[type="date"],
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
    #basic-info input[type="text"]:focus,
    #basic-info input[type="number"]:focus,
    #basic-info input[type="email"]:focus,
    #basic-info input[type="tel"]:focus,
    #basic-info input[type="password"]:focus,
    #basic-info input[type="url"]:focus,
    #basic-info input[type="search"]:focus,
    #basic-info input[type="date"]:focus,
    #basic-info select:focus {
      border-color: #3fb27cff;
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
    .basicInfoForm{

    }
    @media (max-width: 860px) {
      #basic-info .grid {
        grid-template-columns: 1fr;
      }
    }
  `,
})
export class BasicInfoComponent {
  years: { value: string; label: string }[] = []
  constructor() {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 60; i++) {
      const year = currentYear - i;
      this.years.push({ value: year.toString(), label: year.toString() })
    }
  }
  hotelstars = [
    { value: "1", label: "1 Star" },
    { value: "2", label: "2 Star" },
    { value: "3", label: "3 Star" },
    { value: "4", label: "4 Star" },
    { value: "5", label: "5 Star" },
  ];
  selectedstar = "";
  onStarChange(value: string) {
    this.selectedstar = value;
  }
  selectedYear = ""
  onYearChange(value: string) {
    this.selectedYear = value
  }
  basicInfo = new FormGroup({
    propertyName: new FormControl(""),
    starRating: new FormControl(""),
    propBuiltOn: new FormControl(""),
    acceptingBookingSicnce: new FormControl(""),
    workWithCM: new FormControl(""),
    propertyEmail: new FormControl(""),
    propertyPhone: new FormControl(""),
  });
}
