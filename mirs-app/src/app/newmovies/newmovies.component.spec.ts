import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmoviesComponent } from './newmovies.component';

describe('NewmoviesComponent', () => {
  let component: NewmoviesComponent;
  let fixture: ComponentFixture<NewmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
