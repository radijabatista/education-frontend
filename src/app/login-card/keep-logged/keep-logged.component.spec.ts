import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeepLoggedComponent } from './keep-logged.component';

describe('KeepLoggedComponent', () => {
  let component: KeepLoggedComponent;
  let fixture: ComponentFixture<KeepLoggedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeepLoggedComponent]
    });
    fixture = TestBed.createComponent(KeepLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
