import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StolenComponent } from './stolen.component';

describe('StolenComponent', () => {
  let component: StolenComponent;
  let fixture: ComponentFixture<StolenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StolenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StolenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
