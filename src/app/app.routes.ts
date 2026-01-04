import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Privacy } from './privacy/privacy';
import { Terms } from './terms/terms';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'privacy', component: Privacy },
    { path: 'terms', component: Terms },
    { path: '**', redirectTo: 'home' }
];
