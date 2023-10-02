import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise85Component } from './exercise85.component';

describe('Exercise85Component', () => {
  let component: Exercise85Component;
  let fixture: ComponentFixture<Exercise85Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise85Component]
    });
    fixture = TestBed.createComponent(Exercise85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
