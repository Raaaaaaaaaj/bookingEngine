import { Routes } from '@angular/router';
import { ExtranetPenalComponent } from './extranet-penal/extranet-penal.component';
import { PropertiesComponent } from './extranet-penal/properties/properties.component';
import { CreatePropertyComponent } from './extranet-penal/create-property/create-property.component';
import { BasicInfoComponent } from './extranet-penal/create-property/steps/basic-info.component';
import { AmenitiesComponent } from './extranet-penal/create-property/steps/amenities.component';
import { RoomsComponent } from './extranet-penal/create-property/steps/rooms.component';
import { PhotosComponent } from './extranet-penal/create-property/steps/photos.component';
import { PoliciesComponent } from './extranet-penal/create-property/steps/policies.component';

export const extranetRoutes: Routes = [
    {
        path: '',
        component: ExtranetPenalComponent,
        children: [
            {
                path: '', redirectTo: 'properties', pathMatch: 'full'
            },
            {
                path: 'properties',
                component: PropertiesComponent,
            },
            {
                path: 'create-property',
                component: CreatePropertyComponent,
                children: [
                    { path: 'basic-info', component: BasicInfoComponent },
                    { path: 'amenities', component: AmenitiesComponent },
                    { path: 'rooms', component: RoomsComponent },
                    { path: 'photos', component: PhotosComponent },
                    { path: 'policies', component: PoliciesComponent },
                    { path: '', redirectTo: 'basic-info', pathMatch: 'full' }
                ]
            }
        ]
    }
];
