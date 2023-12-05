import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFeaturedCoursesComponent } from './card-featured-courses.component';



@NgModule({
  declarations: [
    CardFeaturedCoursesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardFeaturedCoursesComponent,
  ]
})
export class CardFeaturedCoursesModule { }
