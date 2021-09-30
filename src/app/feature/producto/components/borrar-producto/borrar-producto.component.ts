import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Producto } from '@producto/shared/model/producto';
import { ProductoService } from '@producto/shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-borrar-producto',
  templateUrl: './borrar-producto.component.html',
  styleUrls: ['./borrar-producto.component.css']
})
export class BorrarProductoComponent implements OnInit {

  borrarProductoForm: FormGroup;
  public listaProductos: Observable<Producto[]>;
  subscriptions: Subscription[] = [];

  constructor( protected productoService: ProductoService) {}

  ngOnInit() {
    this.construirFormularioBorrarProducto();
    this.listaProductos = this.productoService.consultar();
  }

  borrar() {
    this.borrarProductoForm.value.id = parseInt(this.borrarProductoForm.value.id);
    this.productoService.eliminar(this.borrarProductoForm.value).subscribe();
    alert('Registro Eliminado');
  }


  private construirFormularioBorrarProducto() {
    this.borrarProductoForm = new FormGroup({
      id: new FormControl('', [Validators.required])
    });
  }

}
