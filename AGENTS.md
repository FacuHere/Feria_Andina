MARKDOWN · AGENTS.MD
# Feria Andina · instrucciones para agentes de IA
## Stack
- Front: React + TypeScript + Redux Toolkit (carpeta /web)
- Back: Node + Express + PostgreSQL (carpeta /api)
## Comandos
- Instalar dependencias: npm install
- Correr tests: npm test
- Revisar estilo: npm run lint
## Convenciones
- TypeScript estricto: no usar `any`.
- Nombres del dominio en español: producto, pedido, cooperativa.
- Commits con Conventional Commits (feat:, fix:, docs:, test:).
## No hacer
- No agregar dependencias nuevas sin avisar.
- No leer ni modificar archivos .env.
- No cambiar la estructura de carpetas.

## Principios Fundamentales
1. KISS primero (Keep It Simple, Stupid)
- Evita complejidad innecesaria
- Soluciona el problema directamente sin sobre-ingeniería
- Si algo puede hacerse en 5 líneas, no hagas 20
- Código simple > código inteligente
2. SOLID después
Una vez que el código es simple, aplica SOLID:
- Single Responsibility
- Open/Closed
- Liskov Substitution
- Interface Segregation
- Dependency Inversion

## Arquitectura y Estructura
# Organización de Carpetas
src/
├── components/          # Componentes Vue reutilizables
│   ├── atomic/         # Componentes atómicos (Button, Input, etc)
│   ├── composed/        # Composiciones de átomos (FormGroup, Card, etc)
│   └── layout/         # Layout y estructura (Header, Sidebar, etc)
├── views/              # Páginas/vistas completas (enrutables)
├── composables/        # Lógica reutilizable (useXXX.js)
├── stores/             # Estado global (Pinia, si lo usas)
├── utils/              # Funciones utilitarias puras
├── services/           # Interacción con APIs
├── types/              # TypeScript types y interfaces
├── assets/             # Imágenes, estilos globales, fuentes
└── main.js             # Punto de entrada