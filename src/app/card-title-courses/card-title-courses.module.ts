import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTitleCoursesComponent } from './card-title-courses.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    CardTitleCoursesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    CardTitleCoursesComponent,
  ]
})
export class CardTitleCoursesModule { }
