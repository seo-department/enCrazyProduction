import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPlayComponent } from './c-play.component';

describe('CPlayComponent', () => {
  let component: CPlayComponent;
  let fixture: ComponentFixture<CPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
