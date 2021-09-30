import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearMovimientoComponent } from './crear-movimiento.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MovimientoService } from '../../shared/service/movimiento.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';

describe('CrearMovimientoComponent', () => {
  let component: CrearMovimientoComponent;
  let fixture: ComponentFixture<CrearMovimientoComponent>;
  let movimientoService: MovimientoService;
  let productoService: ProductoService;
  const listaProductos: Producto[] = [new Producto(1, 'Producto 1', new Date,20000,2,null), new Producto(2, 'Producto 2', new Date,10000,1,null)];

  

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearMovimientoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [MovimientoService, ProductoService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMovimientoComponent);
    component = fixture.componentInstance;
    movimientoService = TestBed.inject(MovimientoService);
    spyOn(movimientoService, 'guardar').and.returnValue(
      of(true)
    );
    productoService = TestBed.inject(ProductoService);
    spyOn(productoService, 'consultar').and.returnValue(
      of(listaProductos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.movimientoForm.valid).toBeFalsy();
  });

  it('Registrando movimiento', () => {
    expect(component.movimientoForm.valid).toBeFalsy();
    component.movimientoForm.controls.idProducto.setValue('1');
    component.movimientoForm.controls.cantidad.setValue('5');
    component.movimientoForm.controls.precioVenta.setValue('5000');
    component.movimientoForm.controls.fechaVenta.setValue('9/09/2021:08:45:00');
    expect(component.movimientoForm.valid).toBeTruthy();

    component.guardar();

  });
});
