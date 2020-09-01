import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkrosComponent } from './akros.component';

describe('AkrosComponent', () => {
  let component: AkrosComponent;
  let fixture: ComponentFixture<AkrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
