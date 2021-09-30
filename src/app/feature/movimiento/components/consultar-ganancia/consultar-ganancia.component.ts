import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MovimientoService } from '../../shared/service/movimiento.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-consultar-ganancia',
  templateUrl: './consultar-ganancia.component.html',
  styleUrls: ['./consultar-ganancia.component.css']
})
export class ConsultarGananciaComponent implements OnInit {
 
  public ganancia: number;
  consultarGananciaForm: FormGroup;
  date$: Observable<Date>;


  constructor(protected movimientoService: MovimientoService) { }

  ngOnInit() {
    this.construirFormularioConsultarGanancia();
  }

  changeDate(date: Date) {
    this.consultarGananciaForm.value.fecha = formatDate(date,'yyyy-MM-ddTHH:mm:ss','en');
  }

  consultarGanancia(){

    this.movimientoService.consultarGanancia(this.consultarGananciaForm.value).subscribe(respuesta => this.ganancia = respuesta.valor);
    
  }

  private construirFormularioConsultarGanancia() {
    this.consultarGananciaForm = new FormGroup({
      fechaVenta: new FormControl(this.date$,[Validators.required])
    });
  }

}
