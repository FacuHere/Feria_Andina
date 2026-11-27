import { describe, expect, it } from "vitest";
import { calcularTotal } from "./calcularTotal";

describe("calcularTotal", () => {
  it("devuelve cero para un carrito vacío", () => {
    expect(calcularTotal([])).toBe(0);
  });

  it("aplica el descuento y redondea el total a dos decimales", () => {
    const items = [{ precio: 19.99, cantidad: 3, descuento: 0.2 }];
    expect(calcularTotal(items)).toBe(47.98);
  });

  it("lanza un error si alguna cantidad es negativa", () => {
    const items = [
      { precio: 10, cantidad: 2 },
      { precio: 5, cantidad: -1 },
    ];
    expect(() => calcularTotal(items)).toThrowError(new Error("Cantidad inválida"));
  });
});
