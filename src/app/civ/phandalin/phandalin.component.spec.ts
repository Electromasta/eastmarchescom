import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhandalinComponent } from './phandalin.component';

describe('PhandalinComponent', () => {
  let component: PhandalinComponent;
  let fixture: ComponentFixture<PhandalinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhandalinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhandalinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
