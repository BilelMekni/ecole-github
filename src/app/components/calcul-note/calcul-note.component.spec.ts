import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculNoteComponent } from './calcul-note.component';

describe('CalculNoteComponent', () => {
  let component: CalculNoteComponent;
  let fixture: ComponentFixture<CalculNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
