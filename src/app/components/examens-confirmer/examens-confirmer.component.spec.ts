import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamensConfirmerComponent } from './examens-confirmer.component';

describe('ExamensConfirmerComponent', () => {
  let component: ExamensConfirmerComponent;
  let fixture: ComponentFixture<ExamensConfirmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamensConfirmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamensConfirmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
