import { Component } from '@angular/core';
import { SidePanelComponent } from '../../../shared/components/side-panel/side-panel.component';
import { PropertiesComponent } from './properties/properties.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-extranet-penal',
  imports: [SidePanelComponent, PropertiesComponent, RouterOutlet],
  templateUrl: './extranet-penal.component.html',
  styleUrl: './extranet-penal.component.css'
})
export class ExtranetPenalComponent {

}
