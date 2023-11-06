import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbeilleContactComponent } from './corbeille-contact.component';

describe('CorbeilleContactComponent', () => {
  let component: CorbeilleContactComponent;
  let fixture: ComponentFixture<CorbeilleContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorbeilleContactComponent]
    });
    fixture = TestBed.createComponent(CorbeilleContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
