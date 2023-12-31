import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAdminComponent } from './modifier-admin.component';

describe('ModifierAdminComponent', () => {
  let component: ModifierAdminComponent;
  let fixture: ComponentFixture<ModifierAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
