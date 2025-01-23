import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokaCasinoReviewComponent } from './joka-casino-review.component';

describe('WildCardCityCasinoReviewComponent', () => {
  let component: JokaCasinoReviewComponent;
  let fixture: ComponentFixture<JokaCasinoReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokaCasinoReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokaCasinoReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
