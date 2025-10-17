import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-input',
  imports: [InputTextModule, FormsModule, FloatLabel, CommonModule],
  template: `
    <p-floatlabel variant="on">
        <input 
        pInputText 
        [id]="id" 
        [type]="type" 
        [placeholder]="placeholder" 
        [(ngModel)]="value"
        [disabled]="disabled"
        [required]="required"
        (ngModelChange)="onInputChange($event)"
        autocomplete="off"
        />
        <label [for]="id">{{label}}</label>
    </p-floatlabel>
    <small *ngIf="error" class="text-danger text-sm">{{error}}</small>
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
  `
})
export class InputComponent {
  // 🔹 Label text for the input
  @Input() label = '';

  // 🔹 Input type (text, email, password, etc.)
  @Input() type: string = 'text';

  // 🔹 Unique ID
  @Input() id: string = 'input-' + Math.random().toString(36).substring(2, 9);

  // 🔹 Placeholder
  @Input() placeholder = '';

  // 🔹 Value for ngModel
  @Input() value: string | number | null = '';

  // 🔹 Disabled state
  @Input() disabled = false;

  // 🔹 Required state
  @Input() required: boolean = false;

  // 🔹 Optional error message
  @Input() error: string = '';

  // 🔹 Emit value changes to parent
  @Output() valueChange = new EventEmitter<string | number | null>();

  onInputChange(newValue: any) {
    this.valueChange.emit(newValue);
  }

}
