import { Routes } from '@angular/router';
import { ExtranetComponent } from './extranet.component';
import { PropertiesComponent } from './properties/properties.component';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { BasicInfoComponent } from './create-property/steps/basic-info.component';
import { AmenitiesComponent } from './create-property/steps/amenities.component';
import { RoomsComponent } from './create-property/steps/roomData/rooms.component';
import { PhotosComponent } from './create-property/steps/photos.component';
import { PoliciesComponent } from './create-property/steps/policies.component';

export const extranetRoutes: Routes = [
    {
        path: '',
        component: ExtranetComponent,
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
