import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { Auth } from '../../../core/services/auth';
// import { OnInit } from '@angular/core';
@Component({
  selector: 'app-side-panel',
  imports: [CommonModule],
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent {
  currentUrl: string;
  constructor(private router: Router, public authService: Auth) {
    this.currentUrl = this.router.url;
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }
  ngOnInit() {
    this.authService.loadFromLocalStorage();
  }
  isExtranet() {
    return this.currentUrl.includes('/extranet');
  }
  isAdmin() {
    return this.currentUrl.includes('/admin')
  }
}
