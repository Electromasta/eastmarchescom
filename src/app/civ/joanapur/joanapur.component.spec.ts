import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoanapurComponent } from './joanapur.component';

describe('JoanapurComponent', () => {
  let component: JoanapurComponent;
  let fixture: ComponentFixture<JoanapurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoanapurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoanapurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
