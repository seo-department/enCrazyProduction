import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotCapitalCasinoReviewComponent } from './jackpot-capital-casino-review.component';

describe('JackpotCapitalCasinoReviewComponent', () => {
  let component: JackpotCapitalCasinoReviewComponent;
  let fixture: ComponentFixture<JackpotCapitalCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackpotCapitalCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackpotCapitalCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
