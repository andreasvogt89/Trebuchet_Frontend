import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystromComponent } from './mystrom.component';

describe('MystromComponent', () => {
  let component: MystromComponent;
  let fixture: ComponentFixture<MystromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
