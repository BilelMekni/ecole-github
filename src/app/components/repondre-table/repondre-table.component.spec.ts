import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepondreTableComponent } from './repondre-table.component';

describe('RepondreTableComponent', () => {
  let component: RepondreTableComponent;
  let fixture: ComponentFixture<RepondreTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepondreTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepondreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
