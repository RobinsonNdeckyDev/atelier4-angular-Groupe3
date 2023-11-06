import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutContactComponent } from './ajout-contact.component';

describe('AjoutContactComponent', () => {
  let component: AjoutContactComponent;
  let fixture: ComponentFixture<AjoutContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutContactComponent]
    });
    fixture = TestBed.createComponent(AjoutContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
