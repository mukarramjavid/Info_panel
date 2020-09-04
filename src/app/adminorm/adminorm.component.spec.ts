import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminormComponent } from './adminorm.component';

describe('AdminormComponent', () => {
  let component: AdminormComponent;
  let fixture: ComponentFixture<AdminormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
