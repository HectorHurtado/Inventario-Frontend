import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoComponent } from './movimiento.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovimientoComponent', () => {
  let component: MovimientoComponent;
  let fixture: ComponentFixture<MovimientoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MovimientoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
