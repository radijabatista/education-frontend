import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardNewContentComponent } from './card-new-content.component';



@NgModule({
  declarations: [
    CardNewContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardNewContentComponent,
  ]
})
export class CardNewContentModule { }
