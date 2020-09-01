import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoolComponent } from './hool.component';

describe('HoolComponent', () => {
  let component: HoolComponent;
  let fixture: ComponentFixture<HoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
