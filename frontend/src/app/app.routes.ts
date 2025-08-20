import { Routes } from '@angular/router';
import { clientRoutes } from './feature/client/client.routes';
import { adminRoutes } from './feature/admin/admin.routes';
import { authRoutes } from './feature/auth/auth.routes';
import { extranetRoutes } from './feature/extranet/extranet.routes';

export const routes: Routes = [
    {
        path: '',
        children: clientRoutes,  // Booking steps
    },
    {
        path: 'admin',
        children: adminRoutes, // Admin panel
    },
    {
        path: 'auth',
        children: authRoutes, // Auth
    },
    {
        path: 'extranet',
        children: extranetRoutes, // Extranet
    }
];
