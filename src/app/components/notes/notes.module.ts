import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotesCreateComponent} from './notes-create/notes-create.component';
import {NotesEditComponent} from './notes-edit/notes-edit.component';
import {NotesListComponent} from './notes-list/notes-list.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  {path: 'list', component: NotesListComponent},
  {path: 'create', component: NotesCreateComponent},
  {path: 'edit/:id', component: NotesEditComponent}
];

@NgModule({
  declarations: [
    NotesCreateComponent,
    NotesEditComponent,
    NotesListComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    FormsModule
  ]
})
export class NotesModule {
}
