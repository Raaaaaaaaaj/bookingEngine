import { Component } from '@angular/core';
// import { SidePanelComponent } from '../../../shared/components/side-panel/side-panel.component';
import { SidePanelComponent } from '../../shared/components/side-panel/side-panel.component';
// import { PropertiesComponent } from './properties/properties.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-extranet',
  imports: [SidePanelComponent, RouterOutlet],
  templateUrl: './extranet.component.html',
  styleUrl: './extranet.component.css'
})
export class ExtranetComponent {

}
