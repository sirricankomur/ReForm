import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeftSidebarComponent } from './edit-left-sidebar.component';

describe('EditLeftSidebarComponent', () => {
  let component: EditLeftSidebarComponent;
  let fixture: ComponentFixture<EditLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLeftSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
