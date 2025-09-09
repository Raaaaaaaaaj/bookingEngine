import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {amenities}


@Component({
  selector: "app-amenities",
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <section id="amenities" aria-labelledby="amenities-title">
      <div class="container">
        <div class="sectionHead text-center">
          <h1 id="basic-info-title">Property Amenities</h1>
        </div>
        <div class="row">
          <div class="col-12 d-flex justify-content-center amenitiesform">
            <div class="card" role="group" aria-labelledby="property-amenities-title">
              <h2 id="property-details-title">Property Amenities</h2>
              <p class="subtitle">Select Your Property Amenities</p>
            <form [formGroup]="amenitiesForm" >
              <aside class="col-12 col-lg-3">
      <div class="position-sticky" style="top: 1rem;">
        <div class="list-group shadow-sm">
          <!-- We'll compute selected count in TS later; for now showing (0 of N) -->
          <a
            *ngFor="let cat of categoriesData; let i = index"
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
            [href]="'#cat-' + i"
          >
            <span class="fw-semibold">{{ cat.category }}</span>
            <span class="badge bg-light text-dark border">
              <!-- Replace 0 with dynamic selected count later -->
              0 of {{ cat.amenities.length }}
            </span>
          </a>
        </div>
      </div>
    </aside>
<section class="col-12 col-lg-9">
      <!-- FormArray wrapper -->
      <div formArrayName="categories" class="d-flex flex-column gap-4">

        <!-- Category block -->
        <div
          *ngFor="let cat of categoriesData; let ci = index"
          class="card border-0 shadow-sm"
          [attr.id]="'cat-' + ci"
          [formGroupName]="ci"
        >
          <div class="card-header bg-white">
            <div class="d-flex align-items-center justify-content-between">
              <h5 class="mb-0">{{ cat.category }}</h5>
              <!-- live count placeholder; wire up later -->
              <span class="small text-muted">
                Selected: <strong>0</strong> / {{ cat.amenities.length }}
              </span>
            </div>
          </div>

          <div class="card-body p-0">
            <!-- Amenity rows -->
            <div
              *ngFor="let a of cat.amenities; let ai = index"
              class="border-top px-3 py-3"
            >
              <div class="row align-items-center">
                <div class="col">
                  <div class="fw-semibold">{{ a.name }}</div>
                </div>

                <!-- Radios: No / Yes (boolean) -->
                <div class="col-auto" [formGroupName]="'amenities'">
                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      [id]="a.id + '-no'"
                      [value]="false"
                      [formControlName]="a.id"
                    />
                    <label class="form-check-label" [for]="a.id + '-no'">No</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input
                      type="radio"
                      class="form-check-input"
                      [id]="a.id + '-yes'"
                      [value]="true"
                      [formControlName]="a.id"
                    />
                    <label class="form-check-label" [for]="a.id + '-yes'">Yes</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Amenity rows -->
          </div>
        </div>
        <!-- /Category block -->

      </div>

      <!-- Bottom actions (mobile) -->
      <div class="d-flex d-md-none justify-content-between mt-3">
        <button type="button" class="btn btn-outline-secondary" (click)="goTo('basic-info')">Back</button>
        <button type="submit" class="btn btn-primary">Save & Continue</button>
      </div>
    </section>
            </form>
            </div>
            </div>
        </div>
      </div>
    </section>
  `,
})
export class AmenitiesComponent implements OnInit {


}
