import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/components/nav/nav.component';
import { SearchComponent } from './feature/search/search.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booking_engine';
}
