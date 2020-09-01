import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeaumereComponent } from './beaumere.component';

describe('BeaumereComponent', () => {
  let component: BeaumereComponent;
  let fixture: ComponentFixture<BeaumereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeaumereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeaumereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
