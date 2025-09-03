import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
@Component({
  selector: 'app-select',
  imports: [CommonModule, FormsModule, Select],
  template: `
      <p-select
        [options]="options"
        [(ngModel)]="selected"
        optionLabel="label"
        optionValue="value"
        [placeholder]="arealabel"
        class="w-full md:w-56 pointer"
        (onChange)="onChange($event)">
      </p-select>
    `,
  styles: `
      .p-select{
        width: 100%;
      }
    `
})
export class SelectComponent {
  @Input() options: { value: string; label: string }[] = [];
  @Input() selected: string = '';
  @Input() arealabel: string = '';
  @Output() selectionChange = new EventEmitter<string>();
  @Input() optionLabel: string = 'label';
  @Input() optionValue: string = 'value';
  onChange(event: any) {
    this.selectionChange.emit(event.value);
  }
} 
