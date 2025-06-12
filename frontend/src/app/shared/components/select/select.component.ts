import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-select',
  imports: [CommonModule],
  template: `
    <select class="form-select pointer" [attr.aria-label]="arealabel" [value]="selected" (change)="onchange($event)"> 
        <option *ngFor="let opt of options" [value]="opt.value">
          {{opt.label}}
        </option>
    </select>`,
})
export class SelectComponent {
  @Input() options: {value: string, label: string}[] = [];
  @Input() selected: string = '';
  @Input() arealabel: string = '';
  @Output() selectionChange = new EventEmitter<string>();

  onchange(event: Event){
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectionChange.emit(selectedValue);
  }
} 
