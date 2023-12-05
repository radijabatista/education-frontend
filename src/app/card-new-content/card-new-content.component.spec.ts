import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNewContentComponent } from './card-new-content.component';

describe('CardNewContentComponent', () => {
  let component: CardNewContentComponent;
  let fixture: ComponentFixture<CardNewContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardNewContentComponent]
    });
    fixture = TestBed.createComponent(CardNewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
