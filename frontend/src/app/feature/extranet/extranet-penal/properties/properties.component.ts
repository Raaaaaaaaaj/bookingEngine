import { Component } from '@angular/core';
import { Auth } from '../../../../core/services/auth';
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
// import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-properties',
  imports: [RouterModule, TabsModule, CommonModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent implements OnInit {
  constructor(public authService: Auth) { }
  ngOnInit() {
    this.authService.loadFromLocalStorage()
  }
  tabs = [
    { route: 'dashboard', label: 'Dashboard', icon: 'pi pi-home' },
    { route: 'transactions', label: 'Transactions', icon: 'pi pi-chart-line' },
    { route: 'products', label: 'Products', icon: 'pi pi-list' },
    { route: 'messages', label: 'Messages', icon: 'pi pi-inbox' }
  ];
}
