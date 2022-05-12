import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFillLayoutComponent } from './form-fill-layout.component';

describe('FormFillLayoutComponent', () => {
  let component: FormFillLayoutComponent;
  let fixture: ComponentFixture<FormFillLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFillLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFillLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
