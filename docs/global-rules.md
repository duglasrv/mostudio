# Reglas Globales de Código
# Aplican a TODOS los proyectos sin excepción

## TypeScript (Global)
- `strict: true` siempre activado en tsconfig
- NUNCA usar `any` — usar `unknown` + type guards si es necesario
- Interfaces para contratos de API y shapes de datos
- Types para uniones, utilidades e intersecciones
- Enums solo cuando el valor importa en runtime, sino `as const` + union types
- Tipar explícitamente parámetros y retorno de TODA función
- Paths aliases configurados: `@/modules`, `@/common`, `@/lib`

## NestJS (Backend)
- Un módulo por dominio de negocio — NUNCA módulos "utils" catch-all
- Capas estrictas: Controller → Service → Repository
  - Controller: solo recibe request, valida DTO, delega a Service, retorna response
  - Service: lógica de negocio pura, NO accede a DB directamente
  - Repository: única capa que habla con Prisma/DB
- DTOs con `class-validator` + `class-transformer` para TODO input
- Guards para autenticación/autorización
- Interceptors para transformación de response y logging
- Pipes para validación y transformación de datos
- Multi-tenant: TenantGuard GLOBAL — valida tenantId en CADA request
- Excepciones tipadas: usar HttpException con códigos específicos
- No `console.log` en producción — usar Logger de NestJS

## Next.js (Frontend)
- App Router siempre (NO Pages Router)
- Server Components por defecto — Client Components SOLO con interactividad
- `"use client"` solo en componentes que usan hooks, eventos o browser APIs
- shadcn/ui como sistema de componentes base
- Tailwind CSS — NO CSS modules ni styled-components
- Layouts para estructura compartida, no componentes wrapper
- Loading/Error boundaries en cada ruta
- Metadata API para SEO en cada page
- Server Actions para mutaciones simples

## Prisma (Base de Datos)
- Schema como fuente de verdad — modelos documentados con `///`
- Migraciones versionadas — NUNCA editar migraciones ya aplicadas
- Índices en: toda FK, campos de búsqueda frecuente, campos de filtro
- Soft delete con `deletedAt DateTime?` en entidades principales
- `createdAt` y `updatedAt` en TODA tabla
- Relaciones explícitas con `onDelete` y `onUpdate` definidos
- Enums de Prisma para estados finitos (OrderStatus, UserRole, etc.)
- Multi-tenant: `tenantId` como FK obligatoria en TODA tabla de datos

## Validación de Datos
- Backend: class-validator en DTOs (NUNCA confiar en el frontend)
- Frontend: Zod schemas para formularios
- DB: constraints en Prisma schema como última línea de defensa
- Regla: validar en las 3 capas, pero la fuente de verdad es el backend

## Manejo de Errores
- Backend: excepciones tipadas con HttpException
- Frontend: Error Boundaries + fallback UI
- API responses consistentes:
  ```json
  { "data": {}, "error": null, "meta": { "timestamp": "ISO" } }
  { "data": null, "error": { "code": "TENANT_NOT_FOUND", "message": "..." } }
  ```
- NUNCA exponer stack traces en producción
- Logging estructurado con correlation IDs

## API Design
- RESTful con convenciones consistentes
- Endpoints: `POST /api/v1/[recurso]` (crear), `GET` (leer), `PATCH` (actualizar), `DELETE` (soft delete)
- Paginación: `?page=1&limit=20` con response `{ data, meta: { total, page, limit } }`
- Filtros: query params descriptivos `?status=active&tenantId=xxx`
- Versionado en URL: `/api/v1/`, `/api/v2/`
- Rate limiting en endpoints públicos

## Git y Versionado
- Conventional commits: `feat|fix|refactor|docs|test|chore(scope): mensaje`
- Una feature = un branch = un PR
- Branch naming: `feat/descripcion-corta`, `fix/bug-descripcion`, `refactor/modulo`
- NO merge sin tests pasando
- NO secrets en el repo — `.env` en `.gitignore` SIEMPRE
- PR description incluye: qué cambia, por qué, cómo probar

## Testing
- Tests unitarios para TODA regla de negocio
- Tests de integración para endpoints críticos
- Los tests los genera la IA desde la spec — el dev revisa cobertura
- Naming: `describe('[Módulo]') > it('should [comportamiento esperado]')`
- Mocks solo para dependencias externas (DB, APIs terceros)
- Coverage mínimo: 80% en lógica de negocio

## Estilo de Código
- No comentarios salvo cuando expliquen un "por qué" no evidente
- Componentes en PascalCase: `UserProfile.tsx`
- Utilidades en camelCase: `formatDate.ts`
- Constantes en UPPER_SNAKE_CASE: `MAX_RETRY_COUNT`
- Archivos de módulo NestJS: `user.module.ts`, `user.service.ts`
- Linter (ESLint) y formateador (Prettier) sin excepciones
- No introducir dependencias nuevas sin justificar en la spec
- Imports ordenados: externos → internos → relativos

## Deploy y Operaciones
- Railway para backend (auto-deploy desde main)
- Vercel para frontend (auto-deploy desde main)
- Variables de entorno en dashboard — NUNCA hardcoded
- Guatemala UTC-6 para timestamps, cron jobs y logs
- Health check endpoint en todo backend: `GET /health`
- Graceful shutdown handling en NestJS

## Seguridad
- Helmet.js en todo backend NestJS
- CORS configurado por dominio específico — NUNCA `*` en producción
- Rate limiting en auth endpoints
- JWT con refresh token rotation
- Passwords: bcrypt con salt rounds >= 12
- SQL injection: Prisma lo maneja, pero NUNCA raw queries sin parametrizar
- XSS: sanitizar inputs, Content-Security-Policy headers
- HTTPS only en producción
