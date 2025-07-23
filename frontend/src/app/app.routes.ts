import { Routes } from '@angular/router';
import { clientRoutes } from './feature/client/client.routes';
import { adminRoutes } from './feature/admin/admin.routes';

export const routes: Routes = [
    {
        path: '',
        children: clientRoutes,  // Booking steps
    },
    {
        path: 'admin',
        children: adminRoutes, // Admin panel
    }
];
