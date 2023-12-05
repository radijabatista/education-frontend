import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTitleCoursesComponent } from './card-title-courses.component';

describe('CardTitleCoursesComponent', () => {
  let component: CardTitleCoursesComponent;
  let fixture: ComponentFixture<CardTitleCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTitleCoursesComponent]
    });
    fixture = TestBed.createComponent(CardTitleCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
