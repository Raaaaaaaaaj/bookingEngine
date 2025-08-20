import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-side-panel',
  imports: [CommonModule],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css'
})
export class SidePanelComponent {
  currentUrl: string;

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

  isExtranet() {
    return this.currentUrl.includes('/extranet');
  }
  isAdmin() {
    return this.currentUrl.includes('/admin')
  }
}
