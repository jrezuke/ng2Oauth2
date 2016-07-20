import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pageNotFound.Component';
export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];