import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, NgIf, NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-amenities",
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, NgIf, NgFor],
  template: `
  <div class="container-fluid py-4">
    <h3 class="fw-bold mb-1">Property Amenities</h3>
    <p class="text-muted small mb-4">
      Answer the amenities available at your property — this helps guests decide to book.
    </p>

    <div class="row">

      <!-- LEFT SIDEBAR -->
      <div class="col-md-3 mb-3">
        <ul class="list-group">
          <li
            *ngFor="let key of objectKeys(config); trackBy: trackKey"
            class="list-group-item d-flex justify-content-between align-items-center"
            style="cursor: pointer;"
            [ngClass]="{ 'active': selectedCategory === key }"
            (click)="selectedCategory = key"
            [attr.aria-pressed]="selectedCategory === key"
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
        </ul>
      </div>

      <!-- RIGHT CONTENT -->
      <div class="col-md-9">

        <!-- No category selected -->
        <div *ngIf="!selectedCategory" class="alert alert-secondary">
          Select a category to view amenities
        </div>

        <!-- Category selected -->
        <div *ngIf="selectedCategory">

          <div class="mb-3">
            <h5 class="fw-bold mb-0">{{ config[selectedCategory].category }}</h5>
            <small class="text-muted">Select availability for each amenity</small>
          </div>

          <!-- Amenities List -->
          <div
            *ngFor="let amenity of config[selectedCategory].amenities; trackBy: trackAmenity"
            class="row align-items-center py-3 border-top"
          >
            <!-- Amenity Name -->
            <div class="col-lg-3 col-md-6 col-12 fw-semibold">
              {{ amenity.name }}
            </div>

            <!-- Yes / No -->
            <div class="col-lg-9 col-md-7 col-12 d-flex align-items-center gap-3 justify-content-end">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  [name]="amenity.id"
                  [id]="amenity.id + '_no'"
                  value="no"
                  [(ngModel)]="amenity.answer"
                />
                <label class="form-check-label" [for]="amenity.id + '_no'">No</label>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  [name]="amenity.id"
                  [id]="amenity.id + '_yes'"
                  value="yes"
                  [(ngModel)]="amenity.answer"
                />
                <label class="form-check-label" [for]="amenity.id + '_yes'">Yes</label>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="d-flex justify-content-between align-items-center mt-4">
            <button class="btn btn-link px-0" (click)="goBack()">Back</button>
            <div>
              <button class="btn btn-outline-secondary me-2" (click)="saveDraft()">Save</button>
              <button class="btn btn-primary" (click)="saveAndContinue()">Save And Continue</button>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
  `
})
export class AmenitiesComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  config: any;
  selectedCategory: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/assets/data/amenities.json').subscribe((res: any) => {
      this.config = res;
    });
  }

  objectKeys(obj: any) {
    return obj ? Object.keys(obj) : [];
  }

  selectedCount(key: string) {
    return this.config[key].amenities.filter((a: any) => a.answer === 'yes').length;
  }

  trackKey(index: number, value: string) {
    return value;
  }

  trackAmenity(index: number, item: any) {
    return item.id ?? index;
  }

  goBack() {}
  saveDraft() {}
  saveAndContinue() {}
}
