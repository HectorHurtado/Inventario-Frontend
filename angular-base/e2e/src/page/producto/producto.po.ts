import { by, element } from 'protractor';

export class ProductoPage {

    private linkCrearProducto = element(by.id('linkCrearProducto'));
    private linkListarProductos = element(by.id('linkListarProducto'));
    private linkBorrarProductos = element(by.id('linkBorrarProducto'));
    private inputIdProducto = element(by.id('id'));
    private inputNombreProducto = element(by.id('nombre'));
    private inputprecioCompraProducto = element(by.id('precioCompra'));
    private inputStockProducto = element(by.id('stock'));
    private listaProductos = element.all((by.css('.table')));
    private buttonRegistrar = element(by.id('registrar-producto'));
    private buttonCancelar = element(by.id('eliminar-producto'));

    async clickBotonCrearProductos() {
        await this.linkCrearProducto.click();
    }

    async clickBotonListarProductos() {
        await this.linkListarProductos.click();
    }

    async clickBotonBorrarProductos() {
        await this.linkBorrarProductos.click();
    }

    async ingresarNombre(nombre) {
        await this.inputNombreProducto.sendKeys(nombre);
    }

    async ingresarPrecioCompra(precioCompra) {
        await this.inputprecioCompraProducto.sendKeys(precioCompra);
    }

    async ingresarStock(stock) {
        await this.inputStockProducto.sendKeys(stock);
    }

    async seleccionarProducto(idProducto) {
        await this.inputIdProducto.element(by.css(`option:nth-child(${idProducto})`)).click();
    }

    async contarProductos() {
        return this.listaProductos.count();
    }

    async clickBotonRegistrarProducto() {
        await this.buttonRegistrar.click();
    }

    async clickBotonEliminarrProducto() {
        await this.buttonCancelar.click();
    }
}
