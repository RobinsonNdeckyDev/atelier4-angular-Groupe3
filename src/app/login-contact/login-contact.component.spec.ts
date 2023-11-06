import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContactComponent } from './login-contact.component';

describe('LoginContactComponent', () => {
  let component: LoginContactComponent;
  let fixture: ComponentFixture<LoginContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginContactComponent]
    });
    fixture = TestBed.createComponent(LoginContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
