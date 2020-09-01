import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavenwatchComponent } from './ravenwatch.component';

describe('RavenwatchComponent', () => {
  let component: RavenwatchComponent;
  let fixture: ComponentFixture<RavenwatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavenwatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavenwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
