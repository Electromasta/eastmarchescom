import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwincitiesComponent } from './twincities.component';

describe('TwincitiesComponent', () => {
  let component: TwincitiesComponent;
  let fixture: ComponentFixture<TwincitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwincitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwincitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
