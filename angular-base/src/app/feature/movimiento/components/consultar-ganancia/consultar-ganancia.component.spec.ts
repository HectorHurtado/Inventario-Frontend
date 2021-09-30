import { waitForAsync, TestBed } from '@angular/core/testing';

import { ConsultarGananciaComponent } from './consultar-ganancia.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MovimientoService } from '../../shared/service/movimiento.service';
import { HttpService } from 'src/app/core/services/http.service';

describe('ConsultarGananciaComponent', () => {


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarGananciaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [MovimientoService, HttpService]
    })
      .compileComponents();
  }));


});
