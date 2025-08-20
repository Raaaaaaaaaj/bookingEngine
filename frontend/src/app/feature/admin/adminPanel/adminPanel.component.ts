import { Component } from '@angular/core';
// import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { SharedModule } from 'primeng/api';
import { SidePanelComponent } from '../../../shared/components/side-panel/side-panel.component';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-adminPanel',
  imports: [AvatarModule, ButtonModule, SidePanelComponent, RouterOutlet],
  templateUrl: './adminPanel.component.html',
  styleUrl: './adminPanel.component.css'
})
export class AdminPanleComponent {

}
