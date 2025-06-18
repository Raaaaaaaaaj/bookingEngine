import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
@Component({
  selector: 'app-search',
  imports: [FormsModule, DatePicker, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
  dates: Date[] | undefined;
  // Flag value
  showPromo : boolean = false;

  ngOnInit(): void {
      console.log("Initialized")
  }

  // Adult Count
  adultCount: number = 1;
  increment(){
    this.adultCount +=1
  };

  decrement(){
    if(this.adultCount > 1){
      this.adultCount -=1;
    };
  };

  handleKeyControl(event: KeyboardEvent){
    console.log("function hit")
    if(event.key === 'ArrowUp' ) this.increment();
    else if(event.key === 'ArrowDown') this.decrement();
  }

  // Promo input show
  showPromoInput(){
   this.showPromo = true;
  }
}
