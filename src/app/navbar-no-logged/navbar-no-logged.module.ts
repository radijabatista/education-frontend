import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarNoLoggedComponent } from './navbar-no-logged.component';



@NgModule({
  declarations: [
    NavbarNoLoggedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarNoLoggedComponent,
  ]
})
export class NavbarNoLoggedModule { }
