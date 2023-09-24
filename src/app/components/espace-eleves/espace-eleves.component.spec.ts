import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceElevesComponent } from './espace-eleves.component';

describe('EspaceElevesComponent', () => {
  let component: EspaceElevesComponent;
  let fixture: ComponentFixture<EspaceElevesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaceElevesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
