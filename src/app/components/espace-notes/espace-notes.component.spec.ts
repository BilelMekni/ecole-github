import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceNotesComponent } from './espace-notes.component';

describe('EspaceNotesComponent', () => {
  let component: EspaceNotesComponent;
  let fixture: ComponentFixture<EspaceNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
