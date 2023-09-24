import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsElevesConfirmeComponent } from './publications-eleves-confirme.component';

describe('PublicationsElevesConfirmeComponent', () => {
  let component: PublicationsElevesConfirmeComponent;
  let fixture: ComponentFixture<PublicationsElevesConfirmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsElevesConfirmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsElevesConfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
