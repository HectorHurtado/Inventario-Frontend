import { browser } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { MovimientoPage } from '../page/movimiento/movimiento.po';
import { ProductoPage } from '../page/producto/producto.po';

describe('workspace-project Movimiento', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let movimiento: MovimientoPage;
    let producto: ProductoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        movimiento = new MovimientoPage();
        producto = new ProductoPage();
    });

    it('Deberia crear producto',  () => {

        const NOMBRE_PRODUCTO = 'Comida';
        const PRECIO_COMPRA_PRODUCTO = 2000;
        const STOCK_PRODUCTO = 10;

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonCrearProductos();
        producto.ingresarNombre(NOMBRE_PRODUCTO);
        producto.ingresarPrecioCompra(PRECIO_COMPRA_PRODUCTO);
        producto.ingresarStock(STOCK_PRODUCTO);

        producto.clickBotonRegistrarProducto();

        browser.switchTo().alert().accept();

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonListarProductos();

        expect(1).toBe(producto.contarProductos());
    });


    it('Deberia listar productos', () => {
        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonListarProductos();

        expect(1).toBe(producto.contarProductos());
    });

    it('Deberia crear movimiento',  () => {

        const CANTIDAD = 5;
        const PRECIO_VENTA = 5000;
        const FECHA_VENTA = "9/29/2021";

        page.navigateTo();
        navBar.clickBotonMovimientos();
        movimiento.clickBotonCrearMovimientos();
        movimiento.seleccionarProducto(1);
        movimiento.ingresarCantidad(CANTIDAD);
        movimiento.ingresarPrecioVenta(PRECIO_VENTA);
        movimiento.ingresarFechaVenta(FECHA_VENTA);
        movimiento.clickBotonRegistrarMovimiento();
        browser.switchTo().alert().accept();

        page.navigateTo();
        navBar.clickBotonMovimientos();
        movimiento.clickBotonListarMovimientos();

        expect(1).toBe(movimiento.contarMovimientos());
    });

    it('Deberia listar movimientos', () => {
        page.navigateTo();
        navBar.clickBotonMovimientos();
        movimiento.clickBotonListarMovimientos();

        expect(1).toBe(movimiento.contarMovimientos());
    });

    it('Deberia consultar ganancia', async () => {

        const FECHA_VENTA = "9/29/2021:08:40:00";
        const MENSAJE_GANANCIA = "GANANCIA: 15000";
        page.navigateTo();
        navBar.clickBotonMovimientos();
        movimiento.clickBotonConsultarGanancia();

        movimiento.ingresarFechaVenta(FECHA_VENTA);
        movimiento.clickBotonConsultarGananciaAction();

        expect(movimiento.consultarGananciaIgual(MENSAJE_GANANCIA)).toBeTruthy();

    });

    it('Deberia eliminar producto',  () => {

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonBorrarProductos();

        producto.seleccionarProducto(1);

        producto.clickBotonEliminarrProducto();
        browser.switchTo().alert().accept();

        expect(0).toBe(producto.contarProductos());
    });

});
