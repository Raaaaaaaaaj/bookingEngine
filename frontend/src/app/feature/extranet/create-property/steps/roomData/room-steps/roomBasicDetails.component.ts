import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { InputComponent } from "../../../../../../shared/components/input/input.component";
import { SelectComponent } from "../../../../../../shared/components/select/select.component";

@Component ({
    selector: 'app-roomBasicDetails',
    imports: [ReactiveFormsModule, SelectComponent, InputComponent],
    template:`
    @if(roomBasicDetailsForm){
        <form [formGroup]="roomBasicDetailsForm" class="row roomBasicDetailsForm mt-4">
        <!-- Room Type -->
         <div class="col-md-4 text-left">
          <p>
            <b>1. Room Type</b> <br />
            Choose the type that best describes this room
          </p>
        </div>
        <div class="col-md-8">
            <app-select
                id="roomType"
                [options]="roomTypeOptions"
                arealabel="Select Room Type"
                formControlName="roomType">
            </app-select>
        </div>
        <!-- Room View -->
         <div class="col-md-4 text-left">
          <p>
            <b>1. Room View</b> <br />
            Describe what the guest will see from this room, like pool, garden, or city views.
          </p>
        </div>
        <div class="col-md-8">
            <app-select
                id="roomViewType"
                [options]="roomViewOptions"
                arealabel="Select Room View"
                formControlName="roomViewType">
            </app-select>
        </div>
        <div class="col-md-4 text-left">
          <p>
            <b>3. Room size (Area) in SQuare Feet</b> <br />
            Specify the indoor area of the room in square units, exclude shared spaces
          </p>
        </div>
        <div class="col-md-8">
            <app-input
            id="roomSize"
            type="number"
            label="Room Size in SqFt"
            formControlName="roomSize">
            </app-input>
        </div>
        <div class="col-md-4 text-left">
          <p>
            <b>4. Room Name</b> <br />
            Add a room name that looks attractive to travellers
          </p>
        </div>
        <div class="col-md-8">
            <app-input
            id="roomName"
            type="text"
            label="Room Name"
            formControlName="roomName">
            </app-input>
        </div>
        <div class="col-md-4 text-left">
          <p>
            <b>5. Number Of Rooms</b> <br />
            The specified room numbers will be reflected as inventory for this room

          </p>
        </div>
        <div class="col-md-8">
            <app-input
            id="numberofRooms"
            type="number"
            label="Number Of Rooms"
            formControlName="numberofRooms">
            </app-input>
        </div>
        <div class="col-md-4 text-left">
          <p>
            <b>6. Description of the room (Optional)</b> <br />
            Highlight what makes this room appealing — its view, comfort, and key features.
          </p>
        </div>
        <div class="col-md-8">
            <app-input
            id="roomDescription"
            type="text"
            label="Room Description"
            formControlName="roomDescription">
            </app-input>
        </div>
        </form>
    }
    `,
    styles: ``,
})

export class RoomBasicDetailsComponent implements OnInit {

    roomBasicDetailsForm: FormGroup<any> | undefined;

    roomTypeOptions:any = [
        {value: 'standard', label: 'Standard'},
        {value: 'deluxe', label: 'Deluxe'},
        {value: 'luxury', label: 'Luxury'},
        {value: 'family', label: 'Family Rooms'},
        {value: 'Suites', label: 'Suites'},
        {value: 'tent', label: 'Tent'},
        {value: 'honeymoon', label: 'Honeymoon'},
        {value: 'villa', label: 'Villa'}
    ]
    roomViewOptions:any = [
        {value: 'cityView', label: 'City View'},
        {value: 'gardenView', label: 'Garden View'},
        {value: 'hillView', label: 'Hill View'},
        {value: 'poolView', label: 'Pool View'},
        {value: 'seeView', label: 'See View'},
        {value: 'noView', label: 'No View'},
        {value: 'airportView', label: 'Airport View'},
        {value: 'beachView', label: 'Beach View'},
        {value: 'desertView', label: 'Desert View'},
        {value: 'forestView', label: 'Forest View'},
        {value: 'lakeView', label: 'Lake View'},
        {value: 'marineView', label: 'Marine View'},
        {value: 'templeView', label: 'Temple View'},
        {value: 'valleyView', label: 'Valley View'}
    ]

    ngOnInit(): void {
        this.roomBasicDetailsForm = new FormGroup({
            roomType: new FormControl('', Validators.required),
            roomViewType: new FormControl('', Validators.required),
            roomSize: new FormControl('', [Validators.required, Validators.max(4)]),
            roomName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
            numberofRooms: new FormControl('', [Validators.required, Validators.max(3)])
        })
    }
}