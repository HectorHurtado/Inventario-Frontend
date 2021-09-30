import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 60;
const LONGITUD_MINIMA_PERMITIDA_NUMERO = 1;

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html'
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  guardar() {
    if(this.validarFormmulario()){
      this.productoServices.guardar(this.productoForm.value).subscribe();
      alert('Registro guardado');
      this.construirFormularioProducto();
    }
  }

  validarFormmulario(){

    if(this.productoForm.value.precioCompra <= 0){
      alert('Precio de Compra no puede ser menor o igual a 0');
      return false;
    }
    if(this.productoForm.value.stock <= 0){
      alert('Stock no puede ser menor o igual a 0');
      return false;
    }
    return true;
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
        Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      precioCompra: new FormControl('', [Validators.required, Validators.min(LONGITUD_MINIMA_PERMITIDA_NUMERO)]),
      stock: new FormControl('', [Validators.required, Validators.min(LONGITUD_MINIMA_PERMITIDA_NUMERO)]),
      fechaCreacion: new FormControl(formatDate(new Date(),'yyyy-MM-ddTHH:mm:ss','en'))
    });
  }

}
