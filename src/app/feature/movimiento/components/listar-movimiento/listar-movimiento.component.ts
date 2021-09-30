import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MovimientoService } from '../../shared/service/movimiento.service';
import { Movimiento } from '../../shared/model/movimiento';


@Component({
  selector: 'app-listar-movimiento',
  templateUrl: './listar-movimiento.component.html'
})
export class ListarMovimientoComponent implements OnInit {
 
  public listaMovimientos: Observable<Movimiento[]>;



  constructor(protected movimientoService: MovimientoService) { }

  ngOnInit() {
    this.listaMovimientos = this.movimientoService.consultar();
  }
}
