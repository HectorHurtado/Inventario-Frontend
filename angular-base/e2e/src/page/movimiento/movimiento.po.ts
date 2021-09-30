import { by, element } from 'protractor';

export class MovimientoPage {

    private linkCrearMovimiento = element(by.id('linkCrearMovimiento'));
    private linkListarMovimientos = element(by.id('linkListarMovimiento'));
    private linkConsultarGanancia = element(by.id('linkConsultarGanancia'));
    private inputIdProducto = element(by.id('idProducto'));
    private inputCantidad = element(by.id('cantidad'));
    private inputPrecioVenta = element(by.id('precioVenta'));
    private inputFechaVenta = element(by.id('fechaVenta'));
    private listaMovimientos= element.all(by.css('.table'));
    private buttonRegistrar = element(by.id('registrar-movimiento'));
    private inputGanancia = element(by.id('ganancia'));
    private buttonConsultarGanancia = element(by.id('consultar-ganancia'));

    async clickBotonCrearMovimientos() {
        await this.linkCrearMovimiento.click();
    }

    async clickBotonListarMovimientos() {
        await this.linkListarMovimientos.click();
    }

    async clickBotonConsultarGanancia() {
        await this.linkConsultarGanancia.click();
    }

    async seleccionarProducto(idProducto) {
        await this.inputIdProducto.element(by.css(`option:nth-child(${idProducto})`)).click();
    }
    async ingresarCantidad(cantidad) {
        await this.inputCantidad.sendKeys(cantidad);
    }

    async ingresarPrecioVenta(precioVenta) {
        await this.inputPrecioVenta.sendKeys(precioVenta);
    }

    async ingresarFechaVenta(fechaVenta) {
        await this.inputFechaVenta.sendKeys(fechaVenta);
    }

    async contarMovimientos() {
        return this.listaMovimientos.count();
    }
    
    async clickBotonRegistrarMovimiento() {
        await this.buttonRegistrar.click();
    }

    async clickBotonConsultarGananciaAction() {
        await this.buttonConsultarGanancia.click();
    }

    async consultarGananciaIgual(ganancia){
        let mensajeText = await this.inputGanancia.getAttribute('placeholder');
        return mensajeText === ganancia;
    }
}
