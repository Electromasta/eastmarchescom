import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HylandmapComponent } from './hylandmap.component';

describe('HylandmapComponent', () => {
  let component: HylandmapComponent;
  let fixture: ComponentFixture<HylandmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HylandmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HylandmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
