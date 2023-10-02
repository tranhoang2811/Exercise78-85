import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise83Component } from './exercise83.component';

describe('Exercise83Component', () => {
  let component: Exercise83Component;
  let fixture: ComponentFixture<Exercise83Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise83Component]
    });
    fixture = TestBed.createComponent(Exercise83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
