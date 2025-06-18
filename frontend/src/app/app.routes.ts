import { Routes } from '@angular/router';
import { SearchresultComponent } from './feature/searchresult/searchresult.component';
import { SearchComponent } from './feature/search/search.component';

export const routes: Routes = [
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: 'search', component: SearchComponent},
    { path: 'searchResult', component: SearchresultComponent }
];
