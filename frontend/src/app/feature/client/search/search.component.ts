import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  imports: [FormsModule, DatePicker, CommonModule, Toast, ButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [MessageService]
})
export class SearchComponent implements OnInit {

  //Toast Service
  constructor(private messageService: MessageService, private router: Router) { }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Max Pax Reached!' });
  }

  dates: Date[] | undefined;
  // Flag value
  showPromo: boolean = false;

  ngOnInit(): void {
    // console.log("Initialized")
  }

  // Adult Count
  adultCount: number = 0;
  maxAdultCount: number = 15;
  increment() {
    if (this.adultCount >= this.maxAdultCount) {
      // alert("Max adult Count Reached")
      this.showError();
      return;
    }
    this.adultCount += 1;
  };
  decrement() {
    if (this.adultCount > 1) {
      this.adultCount -= 1;
    };
  };

  // Handle keyboard increment decrement
  handleKeyControl(event: KeyboardEvent) {
    console.log("Function triggered")
    if (event.key === 'ArrowUp') this.increment();
    else if (event.key === 'ArrowDown') this.decrement();
  }

  // Promo input show
  showPromoInput() {
    this.showPromo = true;
  }

  //Check before pressing next button
  searchResults = (event: Event): void => {
    this.router.navigate(['/searchResult'])
  }
}
