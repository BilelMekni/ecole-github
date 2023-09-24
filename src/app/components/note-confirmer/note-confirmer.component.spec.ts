import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteConfirmerComponent } from './note-confirmer.component';

describe('NoteConfirmerComponent', () => {
  let component: NoteConfirmerComponent;
  let fixture: ComponentFixture<NoteConfirmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteConfirmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteConfirmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
