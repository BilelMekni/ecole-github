import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTeachersComponent } from './modifier-teachers.component';

describe('ModifierTeachersComponent', () => {
  let component: ModifierTeachersComponent;
  let fixture: ComponentFixture<ModifierTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
