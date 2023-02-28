import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotCapitalComponent } from './jackpot-capital.component';

describe('JackpotCapitalComponent', () => {
  let component: JackpotCapitalComponent;
  let fixture: ComponentFixture<JackpotCapitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackpotCapitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackpotCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
