import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-rooms',
    imports: [ReactiveFormsModule],
    template: `
    <h1>This is Rooms</h1>
    `,
    styles: ``
})
export class RoomsComponent {
    @Input() parentForm!: FormGroup;
}
