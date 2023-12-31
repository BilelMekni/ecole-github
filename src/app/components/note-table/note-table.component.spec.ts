import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTableComponent } from './note-table.component';

describe('NoteTableComponent', () => {
  let component: NoteTableComponent;
  let fixture: ComponentFixture<NoteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
