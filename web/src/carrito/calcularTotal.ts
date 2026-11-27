interface ItemCarrito {
  precio: number;
  cantidad: number;
  descuento?: number;
}

export function calcularTotal(items: readonly ItemCarrito[]): number {
  let total = 0;

  for (const { precio, cantidad, descuento = 0 } of items) {
    if (cantidad < 0) {
      throw new Error("Cantidad inválida");
    }
    total += precio * cantidad * (1 - descuento);
  }

  return Math.round((total + Number.EPSILON) * 100) / 100;
}
