import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdbTableComponent } from './ndb-table.component';

describe('NdbTableComponent', () => {
  let component: NdbTableComponent;
  let fixture: ComponentFixture<NdbTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NdbTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NdbTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
