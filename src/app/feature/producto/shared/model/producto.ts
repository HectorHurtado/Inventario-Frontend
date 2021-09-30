export class Producto {
    id: number;
    nombre: string;
    fechaCreacion: Date;
    precioCompra: number;
    stock: number;
    fechaAbastecimiento: Date;

    constructor(id: number, nombre: string, fechaCreacion: Date, precioCompra: number, stock: number, fechaAbastecimiento: Date) {
        this.id = id;
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion;
        this.precioCompra = precioCompra;
        this.stock = stock;
        this.fechaAbastecimiento = fechaAbastecimiento;
    }

} 
