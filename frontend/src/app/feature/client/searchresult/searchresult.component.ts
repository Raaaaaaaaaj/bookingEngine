import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../models/hotels.model';
import { HttpClient } from '@angular/common/http';

import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-searchresult',
  imports: [CardModule],
  templateUrl: './searchresult.component.html',
  styleUrl: './searchresult.component.css'
})
export class SearchresultComponent implements OnInit {
  hotels: Hotel[] = [];

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get<Hotel[]>('assets/data/hotel.mock.json').subscribe((data) => {
      this.hotels = data;
    })
  }
}
