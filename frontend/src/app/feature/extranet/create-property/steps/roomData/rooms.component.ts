import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { RoomBasicDetailsComponent } from "./room-steps/roomBasicDetails.component";
@Component ({
    selector: 'app-rooms',
    imports: [RoomBasicDetailsComponent],
    template:`
        <app-roomBasicDetails></app-roomBasicDetails>
    `,
    styles: ``
})

export class RoomsComponent implements OnInit{
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