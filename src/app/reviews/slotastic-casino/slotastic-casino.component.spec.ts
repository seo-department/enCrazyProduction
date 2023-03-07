import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotasticCasinoComponent } from './slotastic-casino.component';

describe('SlotasticCasinoComponent', () => {
  let component: SlotasticCasinoComponent;
  let fixture: ComponentFixture<SlotasticCasinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotasticCasinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotasticCasinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
