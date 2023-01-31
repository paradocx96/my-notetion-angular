import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavigationBarComponent} from './components/navigation/navigation-bar/navigation-bar.component';
import {ErrorPageComponent} from './components/status/error-page/error-page.component';
import { HomeComponent } from './components/home/home.component';
import {AuthGuardService} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";
import {NotesService} from "./services/notes.service";


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ErrorPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
