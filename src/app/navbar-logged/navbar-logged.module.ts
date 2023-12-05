import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarLoggedComponent } from './navbar-logged.component';



@NgModule({
  declarations: [
    NavbarLoggedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarLoggedComponent,
  ]
})
export class NavbarLoggedModule { }
