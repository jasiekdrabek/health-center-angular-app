import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/authGuard';
import { LoginRedirect } from './helpers/loginRedirect';
const routes: Routes = [{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule),canActivate:[LoginRedirect]},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full',
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
