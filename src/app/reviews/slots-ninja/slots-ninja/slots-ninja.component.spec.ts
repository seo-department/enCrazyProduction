import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsNinjaComponent } from './slots-ninja.component';

describe('SlotsNinjaComponent', () => {
  let component: SlotsNinjaComponent;
  let fixture: ComponentFixture<SlotsNinjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsNinjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsNinjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
