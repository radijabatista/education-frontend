import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLearningJourneyComponent } from './card-learning-journey.component';



@NgModule({
  declarations: [
    CardLearningJourneyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardLearningJourneyComponent,
  ]
})
export class CardLearningJourneyModule { }
