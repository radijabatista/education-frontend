import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterCardPageComponent } from './register-card-page.component';

describe('RegisterCardPageComponent', () => {
  let component: RegisterCardPageComponent;
  let fixture: ComponentFixture<RegisterCardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCardPageComponent]
    });
    fixture = TestBed.createComponent(RegisterCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
