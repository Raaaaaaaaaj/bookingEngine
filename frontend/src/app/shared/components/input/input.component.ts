import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [InputTextModule, FormsModule, FloatLabel, CommonModule],
  template: `
    <p-floatlabel variant="on">
      <input
        pInputText
        [id]="id"
        class="form-control"
        [type]="type"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [required]="required"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onTouched()"
        autocomplete="off"
      />
      <label [for]="id">{{ label }}</label>
    </p-floatlabel>
    <small *ngIf="error" class="text-danger text-sm">{{ error }}</small>
  `,
  styles: `
    :host {
      display: block;
      width: 100%;
      margin-bottom: 1rem;
    }
    input:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  // 🔹 Inputs
  @Input() label = '';
  @Input() type: string = 'text';
  @Input() id: string = 'input-' + Math.random().toString(36).substring(2, 9);
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() required: boolean = false;
  @Input() error: string = '';

  // 🔹 Outputs
  @Output() valueChange = new EventEmitter<string | number | null>();

  // 🔹 Internal value
  value: string | number | null = '';

  // 🔹 Functions provided by Angular forms
  onChange = (value: any) => {};
  onTouched = () => {};

  // --- ControlValueAccessor methods ---

  /** Called when Angular wants to write a value to the component */
  writeValue(value: any): void {
    this.value = value;
  }

  /** Called when the component should propagate changes back to Angular */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /** Called when the control is blurred */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /** Optional: handle disabled state from parent form */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // --- Custom logic for input events ---
  onInput(event: Event): void {
    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    this.onChange(newValue); // Notify Angular Reactive Form
    this.valueChange.emit(newValue); // Notify external listeners (if any)
  }
}
