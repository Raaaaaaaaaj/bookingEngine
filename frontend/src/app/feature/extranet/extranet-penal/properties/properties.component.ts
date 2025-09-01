import { Component } from '@angular/core';
import { Auth } from '../../../../core/services/auth';
import { OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-properties',
  imports: [AsyncPipe],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent implements OnInit {
  constructor(public authService: Auth) { }
  ngOnInit() {
    this.authService.loadFromLocalStorage()
  }
}
