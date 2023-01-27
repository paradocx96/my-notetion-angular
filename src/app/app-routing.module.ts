import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotesListComponent} from "./components/notes/notes-list/notes-list.component";
import {NotesCreateComponent} from "./components/notes/notes-create/notes-create.component";

const routes: Routes = [
  {
    path: '',
    component: NotesListComponent
  },
  {
    path: 'notes-list',
    component: NotesListComponent
  },
  {
    path: 'notes-create',
    component: NotesCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
