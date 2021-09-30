import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { BorrarProductoComponent } from './borrar-producto.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductoService } from '../../shared/service/producto.service';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

describe('BorrarProductoComponent', () => {
  let component: BorrarProductoComponent;
  let fixture: ComponentFixture<BorrarProductoComponent>;
  let productoService: ProductoService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarProductoComponent ],
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
    fixture = TestBed.createComponent(BorrarProductoComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(ProductoService);
    spyOn(productoService, 'eliminar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('borra un producto', () => {

    component.borrarProductoForm.controls.id.setValue('1');
    expect(component.borrarProductoForm.valid).toBeTruthy();

    component.borrar();
  });

});
