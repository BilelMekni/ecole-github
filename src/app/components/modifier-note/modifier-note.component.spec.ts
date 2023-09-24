import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierNoteComponent } from './modifier-note.component';

describe('ModifierNoteComponent', () => {
  let component: ModifierNoteComponent;
  let fixture: ComponentFixture<ModifierNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
