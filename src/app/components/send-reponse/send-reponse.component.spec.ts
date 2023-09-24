import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendReponseComponent } from './send-reponse.component';

describe('SendReponseComponent', () => {
  let component: SendReponseComponent;
  let fixture: ComponentFixture<SendReponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendReponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
