import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotesListComponent} from './components/notes/notes-list/notes-list.component';
import {HttpClientModule} from "@angular/common/http";
import {NotesCreateComponent} from './components/notes/notes-create/notes-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NotesEditComponent} from './components/notes/notes-edit/notes-edit.component';
import {NavigationBarComponent} from './components/navigation/navigation-bar/navigation-bar.component';
import {ErrorPageComponent} from './components/status/error-page/error-page.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {authReducer} from "./state/auth/auth.reducer";

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NotesCreateComponent,
    NotesEditComponent,
    NavigationBarComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({auth: authReducer}, {}),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
