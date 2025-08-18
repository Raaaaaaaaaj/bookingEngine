import { Component } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
@Component({
  selector: 'app-dashboard',
  imports: [CreateHotelComponent, Toolbar, AvatarModule, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
