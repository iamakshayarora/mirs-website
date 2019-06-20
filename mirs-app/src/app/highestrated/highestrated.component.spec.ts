import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestratedComponent } from './highestrated.component';

describe('HighestratedComponent', () => {
  let component: HighestratedComponent;
  let fixture: ComponentFixture<HighestratedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighestratedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
