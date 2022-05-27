import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UnauthGuard } from './shared/guards/unauth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [UnauthGuard], data: { role: 'admin' } },
  { path: 'signup', component: SignupComponent, canActivate: [UnauthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
