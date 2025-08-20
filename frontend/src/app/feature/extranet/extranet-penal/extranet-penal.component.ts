import { Component } from '@angular/core';
import { SidePanelComponent } from '../../../shared/components/side-panel/side-panel.component';
import { PropertiesComponent } from './properties/properties.component';
@Component({
  selector: 'app-extranet-penal',
  imports: [SidePanelComponent, PropertiesComponent],
  templateUrl: './extranet-penal.component.html',
  styleUrl: './extranet-penal.component.css'
})
export class ExtranetPenalComponent {

}
