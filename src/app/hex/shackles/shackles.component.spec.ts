import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShacklesComponent } from './shackles.component';

describe('ShacklesComponent', () => {
  let component: ShacklesComponent;
  let fixture: ComponentFixture<ShacklesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShacklesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShacklesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
