import { Component } from '@angular/core';
import { Auth } from '../../../../core/services/auth';
import { OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-properties',
  imports: [RouterModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent implements OnInit {
  constructor(public authService: Auth) { }
  ngOnInit() {
    this.authService.loadFromLocalStorage()
  }
}
