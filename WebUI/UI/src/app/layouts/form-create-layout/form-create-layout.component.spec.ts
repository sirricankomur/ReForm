import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateLayoutComponent } from './form-create-layout.component';

describe('FormCreateLayoutComponent', () => {
  let component: FormCreateLayoutComponent;
  let fixture: ComponentFixture<FormCreateLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
