import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLearningJourneyComponent } from './card-learning-journey.component';

describe('CardLearningJourneyComponent', () => {
  let component: CardLearningJourneyComponent;
  let fixture: ComponentFixture<CardLearningJourneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLearningJourneyComponent]
    });
    fixture = TestBed.createComponent(CardLearningJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
