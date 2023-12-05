import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArrivingHereComponent } from './card-arriving-here.component';

describe('CardArrivingHereComponent', () => {
  let component: CardArrivingHereComponent;
  let fixture: ComponentFixture<CardArrivingHereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardArrivingHereComponent]
    });
    fixture = TestBed.createComponent(CardArrivingHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
