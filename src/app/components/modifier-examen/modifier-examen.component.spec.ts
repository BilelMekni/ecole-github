import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierExamenComponent } from './modifier-examen.component';

describe('ModifierExamenComponent', () => {
  let component: ModifierExamenComponent;
  let fixture: ComponentFixture<ModifierExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
