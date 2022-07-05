import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefessionalCvComponent } from './prefessional-cv.component';

describe('PrefessionalCvComponent', () => {
  let component: PrefessionalCvComponent;
  let fixture: ComponentFixture<PrefessionalCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefessionalCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefessionalCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
