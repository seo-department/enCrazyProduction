import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsRoomCasinoReviewComponent } from './slots-room-casino-review.component';

describe('SlotsRoomCasinoReviewComponent', () => {
  let component: SlotsRoomCasinoReviewComponent;
  let fixture: ComponentFixture<SlotsRoomCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsRoomCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsRoomCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
