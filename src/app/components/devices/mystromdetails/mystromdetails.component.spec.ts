import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystromdetailsComponent } from './mystromdetails.component';

describe('MystromdetailsComponent', () => {
  let component: MystromdetailsComponent;
  let fixture: ComponentFixture<MystromdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystromdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystromdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
