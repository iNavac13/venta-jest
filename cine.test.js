const venta = require('./cine');

describe('Venta', () => {
  test('Verificar si el monto total es más de 100 pesos', () => {
    const [_, mayor100] = venta();
    expect(mayor100).toBe(true);
  });

  test('Verificar si vendieron palomitas', () => {
    const [palomitas, _] = venta();
    expect(palomitas).toBe(true);
  });
});
