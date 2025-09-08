import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule, Select],
  template: `
    <p-select
      [options]="options"
      [optionLabel]="optionLabel"
      [optionValue]="optionValue"
      [placeholder]="arealabel"
      [ngModel]="value"
      (ngModelChange)="updateValue($event)"
      class="w-full md:w-56 pointer">
    </p-select>
  `,
  styles: `
    .p-select {
      width: 100%;
    }
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() options: { value: string; label: string }[] = [];
  @Input() arealabel: string = '';
  @Input() optionLabel: string = 'label';
  @Input() optionValue: string = 'value';

  @Output() selectionChange = new EventEmitter<string>();

  value: any;
  disabled = false;

  // These will be registered by Angular forms
  private onChange: (value: any) => void = () => { };
  private onTouched: () => void = () => { };

  // Called by Angular when form sets a value
  writeValue(value: any): void {
    this.value = value;
  }

  // Called by Angular to register change fn
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Called by Angular to register touched fn
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Called by Angular when control disabled/enabled
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // When user selects value
  updateValue(value: any): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
    this.selectionChange.emit(value);
  }
}
