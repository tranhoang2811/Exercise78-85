import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise81Component } from './exercise81.component';

describe('Exercise81Component', () => {
  let component: Exercise81Component;
  let fixture: ComponentFixture<Exercise81Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise81Component]
    });
    fixture = TestBed.createComponent(Exercise81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
