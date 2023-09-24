import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsElevesComponent } from './publications-eleves.component';

describe('PublicationsElevesComponent', () => {
  let component: PublicationsElevesComponent;
  let fixture: ComponentFixture<PublicationsElevesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsElevesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
