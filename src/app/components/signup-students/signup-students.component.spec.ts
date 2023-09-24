import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupStudentsComponent } from './signup-students.component';

describe('SignupStudentsComponent', () => {
  let component: SignupStudentsComponent;
  let fixture: ComponentFixture<SignupStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
