import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MovimientoService } from './movimiento.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Movimiento } from '../model/movimiento';
import { HttpResponse } from '@angular/common/http';

describe('MovimientoService', () => {
  let httpMock: HttpTestingController;
  let service: MovimientoService;
  const apiEndpointMovimientosConsulta = `${environment.endpoint}/movimientos`;
  const apiEndpointMovimientos = `${environment.endpoint}/movimientos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovimientoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(MovimientoService);
  });

  it('should be created', () => {
    const movementService: MovimientoService = TestBed.inject(MovimientoService);
    expect(movementService).toBeTruthy();
  });

  it('deberia listar movimientos', () => {
    const dummyMovimientos = [
      new Movimiento(1,1,1,10000, new Date), new Movimiento(2,2,1,30000, new Date)
    ];
    service.consultar().subscribe(movimientos => {
      expect(movimientos.length).toBe(2);
      expect(movimientos).toEqual(dummyMovimientos);
    });
    const req = httpMock.expectOne(apiEndpointMovimientosConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyMovimientos);
  });

  it('deberia crear un movimiento', () => {
    const dummyMovimientos = new Movimiento(1,1,1,10000, new Date);
    service.guardar(dummyMovimientos).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointMovimientos);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

});
