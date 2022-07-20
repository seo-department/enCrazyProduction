import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTipsComponent } from './c-tips.component';

describe('CTipsComponent', () => {
  let component: CTipsComponent;
  let fixture: ComponentFixture<CTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
