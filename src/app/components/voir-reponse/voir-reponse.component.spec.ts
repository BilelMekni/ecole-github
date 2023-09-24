import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirReponseComponent } from './voir-reponse.component';

describe('VoirReponseComponent', () => {
  let component: VoirReponseComponent;
  let fixture: ComponentFixture<VoirReponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirReponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
