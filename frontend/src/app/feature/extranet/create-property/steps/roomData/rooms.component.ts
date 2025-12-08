import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component ({
    selector: 'app-rooms',
    template:``,
    styles: ``
})

export class RoomComponent implements OnInit{
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

