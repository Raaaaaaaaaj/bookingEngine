import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-amenities",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  <div class="container-fluid py-4">
  <h3 class="fw-bold mb-1">Property Amenities</h3>
  <p class="text-muted small mb-4">
    Answer the amenities available at your property — this helps guests decide to book.
  </p>

  <div class="row">
    <div class="col-md-3 mb-3">
      <ul class="list-group">
        @for (key of objectKeys(config); track key) {
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            style="cursor: pointer;"
            [ngClass]="{ 'active': selectedCategory === key }"
            (click)="selectedCategory = key"
            role="button"
            aria-pressed="{{ selectedCategory === key }}"
          >
            <div class="text-start">
              <div class="fw-semibold">{{ config[key].category }}</div>
              <small class="text-muted d-block">
                {{ selectedCount(key) }} of {{ config[key].amenities.length }}
              </small>
            </div>
            <span class="badge bg-light text-dark rounded-pill ms-2">
              {{ config[key].amenities.length }}
            </span>
          </li>
        }
      </ul>
    </div>

    <div class="col-md-9">
      @if (!selectedCategory) {
        <div class="alert alert-secondary">Select a category to view amenities</div>
      }

      @if (selectedCategory) {
        <div class="mb-3">
          <h5 class="fw-bold mb-0">{{ config[selectedCategory].category }}</h5>
          <small class="text-muted">Select availability for each amenity</small>
        </div>

        @for (amenity of config[selectedCategory].amenities; track amenity) {
          <div class="row align-items-center py-3 border-top">
            <div class="col-lg-5 col-md-6 col-12 fw-semibold">
              {{ amenity.name }}
            </div>

            <div class="col-lg-3 col-md-4 col-12 d-flex align-items-center gap-3">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="{{ amenity.id }}"
                  id="{{ amenity.id }}_no"
                  [value]="'no'"
                  [(ngModel)]="amenity.answer"
                />
                <label class="form-check-label" for="{{ amenity.id }}_no">No</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="{{ amenity.id }}"
                  id="{{ amenity.id }}_yes"
                  [value]="'yes'"
                  [(ngModel)]="amenity.answer"
                />
                <label class="form-check-label" for="{{ amenity.id }}_yes">Yes</label>
              </div>
            </div>

            <div class="col-lg-4 col-md-12 col-12 mt-2 mt-lg-0">
              @if (amenity.answer === 'yes') {
                <select class="form-select" aria-label="Detail for {{ amenity.name }}">
                  <option value="" disabled selected>Select</option>
                  <option value="available">Available</option>
                  <option value="chargeable">Chargeable</option>
                  <option value="limited">Limited</option>
                </select>
              } else {
                <div class="text-muted small">Select "Yes" to choose details</div>
              }
            </div>
          </div>
        }

        <div class="d-flex justify-content-between align-items-center mt-4">
          <button class="btn btn-link px-0" (click)="goBack()">Back</button>
          <div>
            <button class="btn btn-outline-secondary me-2" (click)="saveDraft()">Save</button>
            <button class="btn btn-primary" (click)="saveAndContinue()">Save And Continue</button>
          </div>
        </div>
      }
    </div>
  </div>
</div>

    
  `
})
export class AmenitiesComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  config: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/assets/data/amenities.json').subscribe((res: any) => {
      this.config = res;
      console.log("Loaded:", this.config);
    });
  }

  objectKeys(obj: any) {
    return Object.keys(obj);
  }
}
