import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotasticCasinoReviewComponent } from './slotastic-casino-review.component';

describe('SlotasticCasinoReviewComponent', () => {
  let component: SlotasticCasinoReviewComponent;
  let fixture: ComponentFixture<SlotasticCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotasticCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotasticCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
