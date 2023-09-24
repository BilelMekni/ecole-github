import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsGeneraleComponent } from './publications-generale.component';

describe('PublicationsGeneraleComponent', () => {
  let component: PublicationsGeneraleComponent;
  let fixture: ComponentFixture<PublicationsGeneraleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsGeneraleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
