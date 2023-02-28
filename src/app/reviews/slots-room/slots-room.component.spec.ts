import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsRoomComponent } from './slots-room.component';

describe('SlotsRoomComponent', () => {
  let component: SlotsRoomComponent;
  let fixture: ComponentFixture<SlotsRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotsRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotsRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
