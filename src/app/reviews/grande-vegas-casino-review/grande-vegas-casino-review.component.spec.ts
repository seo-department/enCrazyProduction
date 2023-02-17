import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandeVegasCasinoReviewComponent } from './grande-vegas-casino-review.component';

describe('GrandeVegasCasinoReviewComponent', () => {
  let component: GrandeVegasCasinoReviewComponent;
  let fixture: ComponentFixture<GrandeVegasCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandeVegasCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandeVegasCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
