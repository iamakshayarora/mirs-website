import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldmoviepageComponent } from './oldmoviepage.component';

describe('OldmoviepageComponent', () => {
  let component: OldmoviepageComponent;
  let fixture: ComponentFixture<OldmoviepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldmoviepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldmoviepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
