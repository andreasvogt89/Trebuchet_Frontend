import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrakenComponent } from './kraken.component';

describe('KrakenComponent', () => {
  let component: KrakenComponent;
  let fixture: ComponentFixture<KrakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
