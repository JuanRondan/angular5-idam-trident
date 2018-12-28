import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';

import { Angular2IdamModule } from '@pa-util/angular2-idam';
import { GLOBALS } from './idam/global';
import { AuthInterceptorService } from './idam/interceptor';
import { TridentModule } from '@pa-util/trident-rolemanagement';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'roles', component: RolesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    // Import the IdamAuthenticationModule and pass in the idam endpoints and settings via the environment file
    Angular2IdamModule.forRoot({
      discoveryUrl: environment.discoveryUrl,
      redirect: environment.redirect,
      clientId: environment.clientId,
      tridentUrl: environment.tridentUrl,
      autoRefresh: false,
      timeToRefresh: 120
    }),
    TridentModule.forRoot({
      tridentUrl: environment.tridentUrl
    }),
    RouterModule.forRoot(appRoutes, { enableTracing: environment.production }),
  ],
  providers: [
    { provide: GLOBALS, multi: false, useValue: {} }, //INCLUDE THIS IF YOU ARE CREATING AN INJECTION TOKEN (shown below)
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }, //INCLUDE THIS IF YOU ARE USING AN INTERCEPTOR (angular version 4.3 and above, shown below)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
