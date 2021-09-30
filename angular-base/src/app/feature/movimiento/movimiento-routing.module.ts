import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarGananciaComponent } from './components/consultar-ganancia/consultar-ganancia.component';
import { CrearMovimientoComponent } from './components/crear-movimiento/crear-movimiento.component';
import { ListarMovimientoComponent } from './components/listar-movimiento/listar-movimiento.component';
import { MovimientoComponent } from './components/movimiento/movimiento.component';


const routes: Routes = [
  {
    path: '',
    component: MovimientoComponent,
    children: [
      {
        path: 'crear',
        component: CrearMovimientoComponent
      },
      {
        path: 'listar',
        component: ListarMovimientoComponent
      },
      {
        path: 'consultar-ganancia',
        component: ConsultarGananciaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimientoRoutingModule { }
