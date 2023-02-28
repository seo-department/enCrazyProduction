import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandeVegasComponent } from './grande-vegas.component';

describe('GrandeVegasComponent', () => {
  let component: GrandeVegasComponent;
  let fixture: ComponentFixture<GrandeVegasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandeVegasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandeVegasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
