import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltmarshComponent } from './saltmarsh.component';

describe('SaltmarshComponent', () => {
  let component: SaltmarshComponent;
  let fixture: ComponentFixture<SaltmarshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaltmarshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltmarshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
