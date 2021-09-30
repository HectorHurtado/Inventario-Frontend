import { Component, OnInit } from '@angular/core';
import { MovimientoService } from '../../shared/service/movimiento.service';
import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { formatDate } from '@angular/common';

const LONGITUD_MINIMA_PERMITIDA_NUMERO = 1;

@Component({
  selector: 'app-crear-movimiento',
  templateUrl: './crear-movimiento.component.html'
})
export class CrearMovimientoComponent implements OnInit {

  movimientoForm: FormGroup;
  date$: Observable<Date>;
  public listaProductos: Observable<Producto[]>;
  subscriptions: Subscription[] = [];
  
  constructor(protected movimientoServices: MovimientoService, protected productoService: ProductoService) { }

  ngOnInit() {
    this.construirFormularioMovimiento();
    this.listaProductos = this.productoService.consultar();
  }

  guardar() {
    this.movimientoForm.value.idProducto = parseInt(this.movimientoForm.value.idProducto);
    if(this.validarFormmulario()){
       this.movimientoServices.guardar(this.movimientoForm.value).subscribe();
       alert('Registro guardado');
       this.construirFormularioMovimiento();
    }
  }

  changeDate(date: Date) {
    this.movimientoForm.value.fechaVenta = formatDate(date,'yyyy-MM-ddTHH:mm:ss','en');
  }

  validarFormmulario(){

    if(this.movimientoForm.value.canitdad <= 0){
      alert('Cantidad no puede ser menor o igual a 0');
      return false;
    }
    if(this.movimientoForm.value.precioVenta < 0){
      alert('Cantidad no puede ser menor a 0');
      return false;
    }
    return true;
  }

  private construirFormularioMovimiento() {
    this.movimientoForm = new FormGroup({
      idProducto: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required,  Validators.min(LONGITUD_MINIMA_PERMITIDA_NUMERO)]),
      precioVenta: new FormControl('',[Validators.required]),
      fechaVenta: new FormControl(this.date$,[Validators.required]),
    });
  }

}
