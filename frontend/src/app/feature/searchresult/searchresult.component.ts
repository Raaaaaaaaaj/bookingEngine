import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotels.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-searchresult',
  imports: [CommonModule],
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
