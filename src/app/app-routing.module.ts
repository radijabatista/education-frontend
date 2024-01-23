import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from '../app/principal-page/principal-page.component';
import { LoginCardComponent } from './login-card/login-card.component';
import { RegisterCardPageComponent } from './register-card-page/register-card-page.component';

const routes: Routes = [
  { path: '', component: PrincipalPageComponent },
  { path: 'login', component: LoginCardComponent },
  { path: 'register', component: RegisterCardPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
