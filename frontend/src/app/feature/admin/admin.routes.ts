import { Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { AdminPanleComponent } from './adminPanel/adminPanel.component';
import { RegisterComponent } from '../auth/register/register.component';
import { CreateHotelComponent } from './adminPanel/create-hotel/create-hotel.component';
export const adminRoutes: Routes = [
    {
        path: 'adminPanel',
        component: AdminPanleComponent,
        children: [
            { path: '', redirectTo: 'createHotel', pathMatch: 'full' },
            { path: 'createHotel', component: CreateHotelComponent }
        ]
    }
];
