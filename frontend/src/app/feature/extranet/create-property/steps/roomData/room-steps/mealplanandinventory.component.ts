
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-mealplanandinventory',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div *ngIf="subgroup" [formGroup]="subgroup" class="meal-plan-inventory">
      <label>
        Meal plan type
        <select formControlName="mealPlanType">
          <option value="roomOnly">Room only</option>
          <option value="breakfast">Breakfast</option>
          <option value="halfBoard">Half board</option>
        </select>
      </label>
      <label>
        Inventory count
        <input type="number" formControlName="inventoryCount" min="0" />
      </label>
      <div *ngIf="subgroup.invalid" class="text-danger">Please fix meal plan / inventory fields.</div>
    </div>
  `,
  styles: ``,
})
export class MealplanandinventoryComponent implements OnInit {
  @Input() parentForm!: FormGroup | null;
  subgroup!: FormGroup | null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (!this.parentForm) return;
    this.subgroup = this.parentForm.get('mealPlanRatesInventory') as FormGroup;
    if (!this.subgroup) {
      this.parentForm.addControl('mealPlanRatesInventory', this.fb.group({}));
      this.subgroup = this.parentForm.get('mealPlanRatesInventory') as FormGroup;
    }

    if (!this.subgroup.get('mealPlanType')) {
      this.subgroup.addControl('mealPlanType', this.fb.control('roomOnly', [Validators.required]));
    }
    if (!this.subgroup.get('inventoryCount')) {
      this.subgroup.addControl('inventoryCount', this.fb.control(0, [Validators.min(0)]));
    }
  }
}
