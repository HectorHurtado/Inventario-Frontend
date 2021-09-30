export class Movimiento {
    id: number;
    idProducto: number;
    cantidad: number;
    precioVenta: number;
    fechaVenta: Date;

    constructor(id: number, idProducto: number, cantidad: number, precioVenta: number, fechaVenta: Date) {
        this.id = id;
        this.idProducto = idProducto;
        this.cantidad = cantidad;
        this.precioVenta = precioVenta;
        this.fechaVenta = fechaVenta;
    }
}
