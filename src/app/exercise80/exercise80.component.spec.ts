import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise80Component } from './exercise80.component';

describe('Exercise80Component', () => {
  let component: Exercise80Component;
  let fixture: ComponentFixture<Exercise80Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise80Component]
    });
    fixture = TestBed.createComponent(Exercise80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
