import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatresnearbyComponent } from './theatresnearby.component';

describe('TheatresnearbyComponent', () => {
  let component: TheatresnearbyComponent;
  let fixture: ComponentFixture<TheatresnearbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheatresnearbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatresnearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
