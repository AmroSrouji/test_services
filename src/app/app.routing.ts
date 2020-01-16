import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {ServicesComponent} from "./pages/services/services.component";

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'services', component: ServicesComponent },
  ]

