import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthereumCasinosComponent } from './ethereum-casinos.component';

describe('EthereumCasinosComponent', () => {
  let component: EthereumCasinosComponent;
  let fixture: ComponentFixture<EthereumCasinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthereumCasinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthereumCasinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
