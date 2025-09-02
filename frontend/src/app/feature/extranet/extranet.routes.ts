import { Routes } from '@angular/router';
import { ExtranetPenalComponent } from './extranet-penal/extranet-penal.component';
import { PropertiesComponent } from './extranet-penal/properties/properties.component';
import { CreatePropertyComponent } from './extranet-penal/create-property/create-property.component';
export const extranetRoutes: Routes = [
    {
        path: '',
        component: ExtranetPenalComponent,
        children: [
            {
                path: '', redirectTo: 'properties', pathMatch: 'full'
            },
            {
                path: 'properties', component: PropertiesComponent
            },
            {
                path: 'create-property', component: CreatePropertyComponent
            }
        ]
    }
];
