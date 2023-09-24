import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTeachersComponent } from './signup-teachers.component';

describe('SignupTeachersComponent', () => {
  let component: SignupTeachersComponent;
  let fixture: ComponentFixture<SignupTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
