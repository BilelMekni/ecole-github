import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenTableComponent } from './examen-table.component';

describe('ExamenTableComponent', () => {
  let component: ExamenTableComponent;
  let fixture: ComponentFixture<ExamenTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
