import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise79Component } from './exercise79.component';

describe('Exercise79Component', () => {
  let component: Exercise79Component;
  let fixture: ComponentFixture<Exercise79Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise79Component]
    });
    fixture = TestBed.createComponent(Exercise79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
