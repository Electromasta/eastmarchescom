import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarnorthComponent } from './farnorth.component';

describe('FarnorthComponent', () => {
  let component: FarnorthComponent;
  let fixture: ComponentFixture<FarnorthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarnorthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarnorthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
