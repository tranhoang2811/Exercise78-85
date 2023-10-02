import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise78Component } from './exercise78.component';

describe('Exercise78Component', () => {
  let component: Exercise78Component;
  let fixture: ComponentFixture<Exercise78Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Exercise78Component]
    });
    fixture = TestBed.createComponent(Exercise78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
