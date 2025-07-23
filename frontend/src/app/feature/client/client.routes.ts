import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchresultComponent } from './searchresult/searchresult.component';

export const clientRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'searchResult', component: SearchresultComponent },
];
