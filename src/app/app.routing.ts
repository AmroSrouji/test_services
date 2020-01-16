import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {ServicesComponent} from "./pages/services/services.component";

export const appRoutes: Routes = [
    { path: '', redirectTo: '/login',  pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'services', component: ServicesComponent },
  ]

