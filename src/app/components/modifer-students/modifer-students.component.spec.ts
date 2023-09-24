import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiferStudentsComponent } from './modifer-students.component';

describe('ModiferStudentsComponent', () => {
  let component: ModiferStudentsComponent;
  let fixture: ComponentFixture<ModiferStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiferStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiferStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
