import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Movimiento } from '../model/movimiento';
import { Respuesta } from '../model/respuesta';
import { catchError } from 'rxjs/operators';


@Injectable()
export class MovimientoService {


  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Movimiento[]>(`${environment.endpoint}/movimientos`, this.http.optsName('consultar movimientos'));
  }

  public guardar(movimiento: Movimiento) {
    return this.http.doPost<Movimiento, boolean>(`${environment.endpoint}/movimientos`, movimiento,
                                                this.http.optsName('crear/actualizar movimientos')).pipe(
                                                  catchError(err => {
                                                    alert('Error creando movimiento' + err);
                                                    return [];
                                                  })
                                                );
  }

  public consultarGanancia(movimiento: Movimiento) {
    return this.http.doPost<Movimiento, Respuesta>(`${environment.endpoint}/movimientos/ganancia`, movimiento,
                                                this.http.optsName('consultar ganancia'));
  }

}
