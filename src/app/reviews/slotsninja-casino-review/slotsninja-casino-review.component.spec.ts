import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsninjaCasinoReviewComponent } from './slotsninja-casino-review.component';

describe('SlotsninjaCasinoReviewComponent', () => {
  let component: SlotsninjaCasinoReviewComponent;
  let fixture: ComponentFixture<SlotsninjaCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsninjaCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsninjaCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
