import { Component } from '@angular/core';
import { OnboardSidePanelComponent } from '../../../shared/components/onboard-side-panel/onboard-side-panel.component';
import { PropertiesComponent } from './properties/properties.component';
@Component({
  selector: 'app-extranet-penal',
  imports: [OnboardSidePanelComponent, PropertiesComponent],
  templateUrl: './extranet-penal.component.html',
  styleUrl: './extranet-penal.component.css'
})
export class ExtranetPenalComponent {

}
