import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: "app-amenities",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  <h1>{{config?.category}}</h1>
  @if(config){
    <ul>
      @for(let amenity of config.amenities){
        <li>
          {{amenity.name}}
        </li>
      }
    </ul>
  }

`,
  styles: [`
`]
})
export class AmenitiesComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  config: any;
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get('/assets/data/amenities.json').subscribe((res: any) => {
      this.config = res;
    });
  }

}   