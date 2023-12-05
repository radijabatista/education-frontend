import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFeaturedCoursesComponent } from './card-featured-courses.component';

describe('CardFeaturedCoursesComponent', () => {
  let component: CardFeaturedCoursesComponent;
  let fixture: ComponentFixture<CardFeaturedCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFeaturedCoursesComponent]
    });
    fixture = TestBed.createComponent(CardFeaturedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
