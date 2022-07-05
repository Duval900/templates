import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftCvComponent } from './soft-cv.component';

describe('SoftCvComponent', () => {
  let component: SoftCvComponent;
  let fixture: ComponentFixture<SoftCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
