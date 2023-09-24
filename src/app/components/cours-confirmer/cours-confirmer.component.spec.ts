import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursConfirmerComponent } from './cours-confirmer.component';

describe('CoursConfirmerComponent', () => {
  let component: CoursConfirmerComponent;
  let fixture: ComponentFixture<CoursConfirmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursConfirmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursConfirmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
