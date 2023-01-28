import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotesListComponent} from "./components/notes/notes-list/notes-list.component";
import {NotesCreateComponent} from "./components/notes/notes-create/notes-create.component";
import {NotesEditComponent} from "./components/notes/notes-edit/notes-edit.component";
import {ErrorPageComponent} from "./components/status/error-page/error-page.component";

const routes: Routes = [
  {
    path: '',
    component: NotesListComponent
  },
  {
    path: 'notes/list',
    component: NotesListComponent
  },
  {
    path: 'notes/create',
    component: NotesCreateComponent
  },
  {
    path: 'notes/edit/:id',
    component: NotesEditComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
