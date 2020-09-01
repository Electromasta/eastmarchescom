import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulanComponent } from './mulan.component';

describe('MulanComponent', () => {
  let component: MulanComponent;
  let fixture: ComponentFixture<MulanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
