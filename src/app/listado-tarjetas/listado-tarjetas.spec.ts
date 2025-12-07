import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTarjetas } from './listado-tarjetas';

describe('ListadoTarjetas', () => {
  let component: ListadoTarjetas;
  let fixture: ComponentFixture<ListadoTarjetas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoTarjetas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoTarjetas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
