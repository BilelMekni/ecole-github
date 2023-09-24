import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPublicationsGeneraleComponent } from './modifier-publications-generale.component';

describe('ModifierPublicationsGeneraleComponent', () => {
  let component: ModifierPublicationsGeneraleComponent;
  let fixture: ComponentFixture<ModifierPublicationsGeneraleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPublicationsGeneraleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPublicationsGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
