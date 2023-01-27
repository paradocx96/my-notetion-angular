import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesListComponent } from './components/notes/notes-list/notes-list.component';
import {HttpClientModule} from "@angular/common/http";
import { NotesCreateComponent } from './components/notes/notes-create/notes-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NotesEditComponent } from './components/notes/notes-edit/notes-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NotesCreateComponent,
    NotesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
