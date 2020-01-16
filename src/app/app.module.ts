import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

// Modules
import {AngularMaterialModule} from "./angular.material.module";

import {appRoutes} from "./app.routing";

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ServicesComponent } from './pages/services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
