import { Component } from '@angular/core';
import { SelectComponent } from '../select/select.component';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
@Component({
  selector: 'app-nav',
  imports: [SelectComponent, FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  rangeDates: Date[] | undefined;
  languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'zh', label: 'Chinese' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ru', label: 'Russian' },
    { value: 'ar', label: 'Arabic' },
  ];

  currencies = [
    { value: 'USD', label: 'US Dollar' },
    { value: 'EUR', label: 'Euro' },
    { value: 'GBP', label: 'British Pound' },
    { value: 'JPY', label: 'Japanese Yen' },
    { value: 'CNY', label: 'Chinese Yuan' },
    { value: 'INR', label: 'Indian Rupee' },
    { value: 'AUD', label: 'Australian Dollar' },
  ]

  selectedLanguage = 'en';
  selectedCurrency = 'USD';

  onLanguageChange(lang: string) {
    this.selectedLanguage = lang;
  }
  onCurrencyChange(curr: string) {
    this.selectedCurrency = curr;
  }
}
