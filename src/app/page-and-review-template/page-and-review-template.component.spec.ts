import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAndReviewTemplateComponent } from './page-and-review-template.component';

describe('PageAndReviewTemplateComponent', () => {
  let component: PageAndReviewTemplateComponent;
  let fixture: ComponentFixture<PageAndReviewTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAndReviewTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAndReviewTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
