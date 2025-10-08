import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: "app-amenities",
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  template: `
<section id="amenities" aria-labelledby="amenities-title" class="py-4 amenities-container" #mainContent>
  <div class="container">
    <div class="row">
      <!-- Sidebar -->
      <aside class="col-12 col-lg-3">
        <div class="sticky-sidebar">
          <div class="list-group shadow-sm rounded-3">
            <a
              *ngFor="let cat of categoriesData; let i = index"
              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              
              (click)="scrollTo('cat-' + i)"
            >
              <span class="fw-semibold">{{ cat.category }}</span>
              <span class="badge bg-light text-dark border">
                {{ getSelectedCount(i) }} / {{ cat.amenities.length }}
              </span>
            </a>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <section class="col-12 col-lg-9 amenities">
        <form [formGroup]="amenitiesForm" (ngSubmit)="onSubmit()">
          <div formArrayName="categories" class="d-flex flex-column gap-4">

            <!-- Category Block -->
            <div
              *ngFor="let cat of categoriesData; let ci = index"
              class="card border shadow-sm rounded-3"
              [attr.id]="'cat-' + ci"
              [formGroupName]="ci"
            >
              <!-- Header -->
              <div class="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center">
                <h5 class="mb-0 fw-semibold">{{ cat.category }}</h5>
                <small class="text-muted">
                  Selected: <strong>{{ getSelectedCount(ci) }}</strong> / {{ cat.amenities.length }}
                </small>
              </div>

              <!-- Body -->
              <ul class="list-group list-group-flush" formGroupName="amenities">
                <li
                  *ngFor="let a of cat.amenities; let ai = index"
                  class="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span class="fw-medium">{{ a.name }}</span>
                  <div class="d-flex gap-3">
                    <!-- No -->
                    <div class="form-check form-check-inline">
                      <input
                        type="radio"
                        class="form-check-input"
                        [id]="a.id + '-no'"
                        [formControlName]="a.id"
                        [value]="false"
                      />
                      <label class="form-check-label small" [for]="a.id + '-no'">No</label>
                    </div>
                    <!-- Yes -->
                    <div class="form-check form-check-inline">
                      <input
                        type="radio"
                        class="form-check-input"
                        [id]="a.id + '-yes'"
                        [formControlName]="a.id"
                        [value]="true"
                      />
                      <label class="form-check-label small" [for]="a.id + '-yes'">Yes</label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- /Category Block -->

          </div>

          <!-- Bottom Actions -->
          <!-- <div class="d-flex justify-content-between mt-4">
            <button type="button" class="btn btn-outline-secondary" (click)="goTo('basic-info')">
              ← Back
            </button>
            <button type="submit" class="btn btn-danger">
              Save & Continue →
            </button>
          </div> -->
        </form>
      </section>
    </div>
  </div>
</section>
`,
  styles: [`
  .amenities{
    height: 450px;
    overflow-y: scroll;
    scrollbar-width: none;
  }

.sticky-sidebar {
  position: sticky;
  top: 0;
  align-self: start;
}
`]
})
export class AmenitiesComponent implements OnInit {
  @ViewChild('mainContent') mainContent!: ElementRef;
  amenitiesForm: any = FormGroup;
  categoriesData: any[] = [];
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  scrollTo(anchor: string) {
    const main = this.mainContent.nativeElement;
    const element = main.querySelector('#' + anchor);
    if (element) {
      const stickyOffset = this.stickySidebarHeight() || 0; // sticky header height
      const mandatoryOffset = this.mandatoryDivHeight() || 0; // mandatory block height
      const topPos = element.offsetTop - stickyOffset - mandatoryOffset - 10; // 10px extra spacing
      main.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  }

  stickySidebarHeight(): number {
    const sidebar = document.querySelector('.sticky-sidebar');
    return sidebar ? sidebar.clientHeight : 0;
  }

  mandatoryDivHeight(): number {
    const mandatory = document.querySelector('.mandatory-div');
    return mandatory ? mandatory.clientHeight : 0;
  }
  ngOnInit(): void {
    this.http.get<[any]>('/assets/data/amenities.json').subscribe({
      next: (data) => {
        this.categoriesData = data;
        console.log(this.categoriesData);
        this.buildForm();
      },
      error: (err) => console.error("Error Loading Amenities JSON", err)
    });
  };

  buildForm() {
    this.amenitiesForm = this.fb.group({
      categories: this.fb.array([])
    })

    this.categoriesData.forEach(cat => {
      const amenitiesGroup: Record<string, FormControl> = {}
      cat.amenities.forEach((a: any) => {
        amenitiesGroup[a.id] = new FormControl(null)
      });
      const categoryGroup = this.fb.group({
        amenities: this.fb.group(amenitiesGroup)
      });
      this.categories.push(categoryGroup)
    });
  }

  get categories(): FormArray {
    return this.amenitiesForm.get('categories') as FormArray;
  }
  // Selected count for a category
  getSelectedCount(catIndex: number): number {
    const catGroup = this.categories.at(catIndex) as FormGroup;
    const amenities = catGroup.get('amenities') as FormGroup;
    return Object.values(amenities.value).filter(v => v === true).length;
  }
  // Total amenities in a category
  getTotalCount(catIndex: number): number {
    return this.categoriesData[catIndex]?.amenities?.length || 0;
  }
  // Navigate Between Steps
  goTo(step: string) {
    this.router.navigate(['../' + step], { relativeTo: this.route })
  }
  // Handle Form Submit
  onSubmit() {
    if (this.amenitiesForm.valid) {
      console.log("Form Submitted", this.amenitiesForm.value);
      this.goTo('rooms');
    }
    else {
      console.warn("Form Invalid")
    }
  }
}
