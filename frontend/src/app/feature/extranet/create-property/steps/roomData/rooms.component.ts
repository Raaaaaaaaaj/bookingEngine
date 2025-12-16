import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import {RoomsStepperComponent} from "./room-steps/room-stepper.component";
@Component ({
    selector: 'app-rooms',
    imports: [RoomsStepperComponent],
    template:`
        <app-roomStepper></app-roomStepper>
    `,
    styles: ``
})

export class RoomsComponent implements OnInit{
    @Input() parentForm!: FormGroup;
    roomForm!: FormGroup;
    constructor(private fb: FormBuilder){}
    ngOnInit(){
        this.roomForm = this.fb.group({
            basicDetails: null,
            sleepingArrangementsnOccupancy: null,
            mealPlannRatesnInventory: null
        })
    }
}