import { Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminPanleComponent } from './adminPanel/adminPanel.component';
import { RegisterComponent } from './register/register.component';
import { CreateHotelComponent } from './adminPanel/create-hotel/create-hotel.component';
export const adminRoutes: Routes = [
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        component: AdminPanleComponent,
        children: [
            { path: '', redirectTo: 'createHotel', pathMatch: 'full' },
            { path: 'createHotel', component: CreateHotelComponent }
        ]
    }
];
