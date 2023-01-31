import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorPageComponent} from "./components/status/error-page/error-page.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'notes',
    loadChildren: () => import('./components/notes/notes.module').then(m => m.NotesModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
