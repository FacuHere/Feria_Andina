# Comparativa M1 · calcularTotal

## Herramientas usadas

- Herramienta A: GitHub Copilot en VS Code, rama `copilot`.
- Herramienta B: OpenAI Codex, rama `codex`.

Usé el mismo prompt inicial y el mismo contenido de `AGENTS.md` en las dos ramas.

## Comparación

| Criterio | Herramienta A · Copilot | Herramienta B · Codex |
|---|---|---|
| Tiempo hasta una versión aceptable | 41 s para la primera implementación. Hizo falta un segundo pedido para configurar y ejecutar Vitest. No registré el tiempo total. | 50 s para la implementación y la verificación con Node. La ejecución con Vitest quedó pendiente. |
| Correcciones necesarias | Pedí que configurara `web/package.json` para instalar Vitest y ejecutar `npm test`. El ajuste fue al entorno de pruebas. | Vitest ya estaba declarado como dependencia de desarrollo. La instalación quedó bloqueada porque npm no pudo conectarse al registro. |
| Tests (¿pasan? ¿cubren casos borde?) | Vitest ejecutó los tres casos pedidos y todos pasaron: carrito vacío, producto con descuento y cantidad negativa. | Codex informó que los tres casos pasaron al verificarlos con Node. Quedó pendiente ejecutar la suite con Vitest. |
| Fidelidad a `AGENTS.md` | Ubicó la función y su test juntos en `web/src/carrito/` y comunicó que faltaba ejecutar Vitest en la primera pasada. | Ubicó la función y su test juntos en `web/src/carrito/` e informó qué verificó con Node y qué quedó pendiente con Vitest. |

**Evidencia de Copilot.** La ejecución con Vitest 3.2.7 informó `Test Files 1 passed (1)` y `Tests 3 passed (3)`.
 RUN  v3.2.7 C:/Users/Hered/OneDrive/Documentos/Cursos/Curso inteligencia artificial ministerio/Modulo uno/feria_andina2/web

 ✓ src/carrito/calcularTotal.test.ts (3 tests) 3ms

 Test Files  1 passed (1)
      Tests  3 passed (3)
**Evidencia de Codex.** La respuesta inicial registró 50 s y reportó la verificación de los tres casos con Node, junto con el problema de conexión al registro de npm.

## Qué acepté, qué corregí y por qué

Acepté la función y los tres casos de prueba que generaron ambas herramientas porque cubren el cálculo solicitado, el carrito vacío y el error por cantidad negativa. En la rama de Copilot pedí completar la configuración y ejecutar los tests. El resultado de Vitest confirmó que los tres pasaron. En la rama de Codex tomé la comprobación con Node como una verificación inicial y dejé registrada la ejecución pendiente con Vitest.

## Un caso borde que el prompt no contemplaba

Un producto con precio `1.005`, cantidad `1` y sin descuento. El prompt pide redondear a dos decimales, pero deja sin definir el criterio para un valor justo en la mitad.

## Para qué tarea usaría cada herramienta
 Usaría Codex para una tarea que combine implementación y verificación inicial. En este ejercicio, Codex avanzó hasta comprobar los tres casos con Node cuando falló la instalación de Vitest.
