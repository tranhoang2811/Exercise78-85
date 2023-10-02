import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise82Component } from './exercise82.component';

describe('Exercise82Component', () => {
  let component: Exercise82Component;
  let fixture: ComponentFixture<Exercise82Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise82Component]
    });
    fixture = TestBed.createComponent(Exercise82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
