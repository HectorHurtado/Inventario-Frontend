import { NgModule } from '@angular/core';

import { MovimientoRoutingModule } from './movimiento-routing.module';
import { ListarMovimientoComponent } from './components/listar-movimiento/listar-movimiento.component';
import { CrearMovimientoComponent } from './components/crear-movimiento/crear-movimiento.component';
import { MovimientoComponent } from './components/movimiento/movimiento.component';
import { SharedModule } from '@shared/shared.module';
import { MovimientoService } from './shared/service/movimiento.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ConsultarGananciaComponent } from './components/consultar-ganancia/consultar-ganancia.component';




@NgModule({
  declarations: [
    CrearMovimientoComponent,
    ListarMovimientoComponent,
    ConsultarGananciaComponent,
    MovimientoComponent
    ],
  imports: [
    MovimientoRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatMomentDateModule,
  ],
  providers: [MovimientoService]
})
export class MovimientoModule { }
