import { Component } from "@angular/core";

@Component ({
    selector: 'app-roomBasicDetails',
    template:`
        <h1>Room basic details conmponent works</h1>
    `,
    styles: ``
})

export class RoomBasicDetailsComponent{
    roomTypeOptions = [
        {label: 'standard', value: 'Standard'},
        {label: 'deluxe', vlaue: 'Deluxe'},
        {label: 'luxury', value: 'Luxury'},
        {label: 'family', value: 'Family Rooms'},
        {label: 'Suites', value: 'Suites'},
        {label: 'tent', value: 'Tent'},
        {label: 'honeymoon', value: 'Honeymoon'},
        {label: 'villa', value: 'Villa'}
    ]
    roomVieOptions = [
        {label: 'cityView', value: 'City View'},
        {label: 'gardenView', value: 'Garden View'},
        {label: 'hillView', value: 'Hill View'},
        {label: 'poolView', value: 'Pool View'},
        {label: 'seeView', value: 'See View'},
        {label: 'noView', value: 'No View'},
        {label: 'airportView', value: 'Airport View'},
        {label: 'beachView', value: 'Beach View'},
        {label: 'desertView', value: 'Desert View'},
        {label: 'forestView', value: 'Forest View'},
        {label: 'lakeView', value: 'Lake View'},
        {label: 'marineView', value: 'Marine View'},
        {label: 'templeView', value: 'Temple View'},
        {label: 'valleyView', value: 'Valley View'}
    ]
}