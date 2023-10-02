import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise84Component } from './exercise84.component';

describe('Exercise84Component', () => {
  let component: Exercise84Component;
  let fixture: ComponentFixture<Exercise84Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise84Component]
    });
    fixture = TestBed.createComponent(Exercise84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
