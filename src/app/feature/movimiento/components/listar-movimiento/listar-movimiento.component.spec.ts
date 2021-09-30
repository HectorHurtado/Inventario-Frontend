import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarMovimientoComponent } from './listar-movimiento.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MovimientoService } from '../../shared/service/movimiento.service';
import { Movimiento } from '../../shared/model/movimiento';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarMovimientoComponent', () => {
  let component: ListarMovimientoComponent;
  let fixture: ComponentFixture<ListarMovimientoComponent>;
  let movimientoService: MovimientoService;
  const listaMovimientos: Movimiento[] = [new Movimiento(1, 1, 10, 10000, new Date), new Movimiento(2, 2, 30, 6000, new Date)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMovimientoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [MovimientoService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMovimientoComponent);
    component = fixture.componentInstance;
    movimientoService = TestBed.inject(MovimientoService);
    spyOn(movimientoService, 'consultar').and.returnValue(
      of(listaMovimientos)
    );
    fixture.detectChanges();
  });

  it('deberia listar movimientos', () => {
    expect(component).toBeTruthy();
    component.listaMovimientos.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
