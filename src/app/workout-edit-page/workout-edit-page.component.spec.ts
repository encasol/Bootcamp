import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutEditPageComponent } from './workout-edit-page.component';

describe('WorkoutEditPageComponent', () => {
  let component: WorkoutEditPageComponent;
  let fixture: ComponentFixture<WorkoutEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
