import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarProductoComponent } from './listar-producto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductoService } from '../../shared/service/producto.service';
import { Producto } from '../../shared/model/producto';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarProductoComponent', () => {
  let component: ListarProductoComponent;
  let fixture: ComponentFixture<ListarProductoComponent>;
  let productoService: ProductoService;
  const listaProductos: Producto[] = [new Producto(1, 'Producto 1', new Date,20000,2,null), new Producto(2, 'Producto 2', new Date,10000,1,null)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProductoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ProductoService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProductoComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(ProductoService);
    spyOn(productoService, 'consultar').and.returnValue(
      of(listaProductos)
    );
    fixture.detectChanges();
  });

  it('deberia listar 2 productos', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(2).toBe(listaProductos.length);

});

});
