import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPageComponent } from '../app/principal-page/principal-page.component';
import { LoginPageComponent } from '../app/login-page/login-page.component'

const routes: Routes = [
  { path: '', component: PrincipalPageComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
