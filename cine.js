const productos = ['refresco','chicle','palomitas','helado','galletas']

function productosPorDia() {
    return Math.floor(Math.random() * (30 - 20 + 1)) + 10;
}
function precios() {
    return Math.floor(Math.random() * 10) + 1;
}
function venta() {
    let cantidadProductoVendido=productosPorDia();
    let totalVendido=0;
    let palomitas=false;
    let mayor100=false;
    for (let i = 0; i < cantidadProductoVendido; i++) {
        let precioVenta=precios(); 
        totalVendido+=precioVenta
        let productoVendidos=Math.floor(Math.random() * 4) + 1;
        if (productoVendidos=2) {
            palomitas=true;
        }
    }
    if (totalVendido>100) {
        mayor100=true;
    }
    return [palomitas, mayor100]
}

console.log(venta(productos));

module.exports = venta;