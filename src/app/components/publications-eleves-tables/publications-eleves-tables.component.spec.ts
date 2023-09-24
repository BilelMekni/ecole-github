import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsElevesTablesComponent } from './publications-eleves-tables.component';

describe('PublicationsElevesTablesComponent', () => {
  let component: PublicationsElevesTablesComponent;
  let fixture: ComponentFixture<PublicationsElevesTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsElevesTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsElevesTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
