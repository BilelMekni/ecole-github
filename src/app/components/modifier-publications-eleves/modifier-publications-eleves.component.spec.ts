import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPublicationsElevesComponent } from './modifier-publications-eleves.component';

describe('ModifierPublicationsElevesComponent', () => {
  let component: ModifierPublicationsElevesComponent;
  let fixture: ComponentFixture<ModifierPublicationsElevesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPublicationsElevesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPublicationsElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
