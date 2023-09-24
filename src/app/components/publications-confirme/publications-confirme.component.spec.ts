import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsConfirmeComponent } from './publications-confirme.component';

describe('PublicationsConfirmeComponent', () => {
  let component: PublicationsConfirmeComponent;
  let fixture: ComponentFixture<PublicationsConfirmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsConfirmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsConfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
