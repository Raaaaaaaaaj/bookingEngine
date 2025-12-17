
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sleepingarrangements',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div *ngIf="subgroup" [formGroup]="subgroup" class="sleeping-arrangements">
      <label>
        Number of beds
        <input type="number" formControlName="beds" min="1" />
      </label>
      <label>
        Max occupancy
        <input type="number" formControlName="maxOccupancy" min="1" />
      </label>
      <div *ngIf="subgroup.invalid" class="text-danger">Please fix sleeping arrangement fields.</div>
    </div>
  `,
  styles: ``,
})
export class SleepingarrangementsComponent implements OnInit {
  @Input() parentForm!: FormGroup | null;
  subgroup!: FormGroup | null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (!this.parentForm) return;
    this.subgroup = this.parentForm.get('sleepingArrangementsOccupancy') as FormGroup;
    if (!this.subgroup) {
      this.parentForm.addControl('sleepingArrangementsOccupancy', this.fb.group({}));
      this.subgroup = this.parentForm.get('sleepingArrangementsOccupancy') as FormGroup;
    }

    if (!this.subgroup.get('beds')) {
      this.subgroup.addControl('beds', this.fb.control(1, [Validators.min(1)]));
    }
    if (!this.subgroup.get('maxOccupancy')) {
      this.subgroup.addControl('maxOccupancy', this.fb.control(2, [Validators.min(1)]));
    }
  }
}
