import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
@Component({
  selector: 'app-search',
  imports: [FormsModule, DatePicker, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  dates: Date[] | undefined;
  // Flag value
  showPromo : boolean = false;

  showPromoInput(){
   this.showPromo = true;
  }
}
