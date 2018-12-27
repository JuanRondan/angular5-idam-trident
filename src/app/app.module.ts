import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { Angular2IdamModule } from '@pa-util/angular2-idam';
import { GLOBALS } from './idam/global';
import { AuthInterceptorService } from './idam/interceptor';
import { environment } from '../environments/environment';

const appRoutes : Routes = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Import the IdamAuthenticationModule and pass in the idam endpoints and settings via the environment file
    Angular2IdamModule.forRoot({
      discoveryUrl: environment.discoveryUrl,
      redirect: environment.redirect,
      clientId: environment.clientId
    }),
    RouterModule.forRoot(appRoutes, { enableTracing: environment.production }),
  ],
  providers: [
    { provide: GLOBALS, multi: false, useValue: {}}, //INCLUDE THIS IF YOU ARE CREATING AN INJECTION TOKEN (shown below)
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }, //INCLUDE THIS IF YOU ARE USING AN INTERCEPTOR (angular version 4.3 and above, shown below)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
