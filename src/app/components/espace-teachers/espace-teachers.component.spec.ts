import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceTeachersComponent } from './espace-teachers.component';

describe('EspaceTeachersComponent', () => {
  let component: EspaceTeachersComponent;
  let fixture: ComponentFixture<EspaceTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
