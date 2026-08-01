# Metodología Oficial — Spec-Driven Development (SDD)

> **Fuente de verdad** del equipo. Aplica a TODOS los proyectos sin excepción.
> Si una skill, regla o spec contradice este documento, este documento gana.
> OpenClaw debe citarlo cuando justifique decisiones metodológicas.

---

## 0. Principio rector

> La calidad del software generado con IA es **directamente proporcional** a la
> calidad de la especificación. Nuestro trabajo no es escribir código; es
> escribir los documentos que hacen que el código se escriba solo
> — y correctamente.

---

## 1. Cambio de paradigma: de Vibe Coding a IA Engineering

El desarrollo asistido por IA **no** consiste en pedirle código a un modelo y
aceptar lo que devuelve. Eso es **vibe coding** y solo sirve para prototipos
desechables.

### Pregunta filtro
> ¿Este proyecto es importante y debe crecer con el tiempo?
> Si la respuesta es **sí**, la metodología obligatoria es **IA Engineering bajo
> Spec-Driven Development**.

### Cuándo SÍ aplica vibe coding
- Prototipos desechables o demos internas de corta vida.
- Validación rápida de una idea antes de invertir en arquitectura.
- Scripts puntuales que no forman parte de un sistema mayor.

### Cuándo NO aplica vibe coding
- Software empresarial con reglas de negocio complejas.
- Sistemas que recibirán mantenimiento y nuevas features.
- Productos multi-tenant o con integraciones externas críticas.
- Todo lo que se construye para clientes reales.

### Nuevo rol del desarrollador (Omar)
Omar deja de ser quien escribe código y se convierte en **project manager
técnico** que coordina las acciones de la IA bajo un marco documentado.
Disciplina: NO intervenir manualmente el código; concentrar el esfuerzo en la
calidad de las **entradas** (reglas, diseño, dominio, especificación).

---

## 2. La limitación real: el contexto

La mayor restricción de los agentes no es la capacidad del modelo, sino el uso
del contexto. Si se trabaja siempre en el mismo hilo, el contexto se satura y
el modelo empieza a alucinar, generar código inconsistente o ignorar
restricciones previas.

### Regla operativa del equipo
**Cada tarea significativa se ejecuta en un hilo nuevo**, apoyándose en
documentos versionados (reglas, skills, spec) en lugar de en la memoria
conversacional del chat. El contexto debe **reconstruirse desde archivos**, no
desde el historial.

---

## 3. Los cinco pilares

| Pilar | Propósito | Archivo |
|-------|-----------|---------|
| **1. Reglas** | Acotan estética y estructura del código generado. | `docs/global-rules.md` |
| **2. Skills** | Añaden capacidades y conectan con herramientas externas. | `skills/*.md` |
| **3. Diseño de sistema** | Define arquitectura, límites y separación entre módulos. | `docs/projects/[proyecto]/architecture.md` |
| **4. Reglas de negocio** | Codifican el dominio: la tabla de la verdad del producto. | `docs/projects/[proyecto]/business-rules.md` |
| **5. Especificación** | Consolida contrato + dominio + validación en un único input determinante. | Generada por feature usando `skills/spec-template.md` |

---

## 4. Reglas

Limitaciones, **no** capacidades. Aplican a todo proyecto.

Ejemplos vigentes:
- Tipar explícitamente parámetros y retorno de toda función.
- Evitar comentarios salvo cuando expliquen un "por qué" no evidente.
- PascalCase para componentes, camelCase para utilidades.
- Linter y formateador sin excepciones.
- No introducir dependencias nuevas sin justificar en la spec.

> Detalle completo en [global-rules.md](global-rules.md).

---

## 5. Skills

Documentos que **crean nuevas capacidades** para el agente. Una skill = una
función concreta y acotada, no el proyecto completo.

Ventaja: una vez definida, cualquier ticket que la requiera la **invoca** en
lugar de re-explicar convenciones. Reduce consumo de contexto y estabiliza
calidad.

Skills globales actuales (`skills/`):
- `nestjs-multitenant.md`
- `nestjs-endpoint.md`
- `frontend-nextjs-shadcn.md`
- `spec-template.md`
- `test-generator.md`
- `security-audit.md`
- `skill-creator.md` (meta-skill)

> Las skills específicas de un proyecto viven en
> `docs/projects/[proyecto]/skills/` y heredan de las globales.

---

## 6. Bloque de planificación

### 6.1 Diseño de sistema
Establece arquitectura y límites de cada módulo. **Sin diseño documentado, la
IA lo inferirá distinto cada iteración** y romperá la coherencia. Cada
proyecto tiene su `architecture.md`.

### 6.2 Reglas de negocio (dominio / tabla de la verdad)
Definición del dominio. Un código mediocre es tolerable; un usuario que no
recibe lo que espera, **no**. Cada proyecto tiene su `business-rules.md`.

### 6.3 Especificación
Único input determinante para generar código. Tres bloques:

| Bloque | Contenido |
|--------|-----------|
| **Contrato** | Tipos, interfaces, protocolos, contratos de API, esquemas de validación. |
| **Dominio** | Reglas de negocio como pseudocódigo o invariantes (`stock ≥ 0`, `email único por business`). |
| **Validación** | Criterios de aceptación: casos felices, casos borde, errores esperados. |

Efectos de una spec bien hecha:
1. Elimina la alucinación: cada hilo nuevo recibe contexto completo.
2. Evita que la IA genere código distinto al requerido.
3. Permite automatizar módulos completos invocando skills.

---

## 7. Validación

Cierra el ciclo. Trabajo posterior a la generación cuando ya hay código que
compila y funciona.

- **Mínimo**: tests unitarios sobre las reglas del dominio.
- **Siguiente nivel**: casos no esperados, sobrecarga de datos, concurrencia.
- **Seguridad**: gitleaks + deep-eye antes del commit / deploy.

### Regla del equipo
Los tests **no los escribe el desarrollador a mano**. El agente los deriva de
la spec. Omar revisa cobertura y coherencia con el dominio, no sintaxis.

---

## 8. Flujo de trabajo (orden estricto)

1. **Definir reglas globales** del proyecto (`global-rules.md`).
2. **Crear skills** para tareas recurrentes y conectores externos.
3. **Elaborar diseño de sistema** y plasmarlo en `architecture.md` + skill de
   arquitectura por proyecto si aplica.
4. **Documentar reglas de negocio** en `business-rules.md`.
5. **Escribir la especificación** (contrato + dominio + validación) de la
   feature concreta.
6. **Aprobación de Omar** sobre la spec (gate duro — sin aprobación no se
   genera código).
7. **Delegar generación de código** al agente en **hilo nuevo**, invocando las
   skills relevantes.
8. **Delegar tests** unitarios y de carga al agente desde la spec.
9. **Auditoría de seguridad** (gitleaks + deep-eye) antes del commit.
10. **Revisar funcionalidad y cobertura**; iterar **sobre la spec**, no sobre
    el código.

---

## 9. Aplicación inmediata por proyecto

Cada uno de los proyectos activos debe tener:
- ✅ `architecture.md` actualizado (pilar 3)
- ✅ `business-rules.md` actualizado (pilar 4)
- ✅ Carpeta `docs/projects/[proyecto]/skills/` con skills específicas
- ✅ Tests derivados de spec ejecutables (`npm test`)
- ✅ Pipeline de seguridad (gitleaks + deep-eye) configurado

Estado actual:
- AgentIQ, BLÜ, Farma, Terranexo, Trainding → pilares 3 y 4 completos
  (validados contra código real el 06/05/2026).

---

## 10. Checklist antes de empezar un ticket

> Ver [pre-ticket-checklist.md](pre-ticket-checklist.md) — gate duro.

- ¿Existen reglas globales activas?
- ¿Las skills necesarias están creadas y documentadas?
- ¿Hay diseño de sistema actualizado para el módulo afectado?
- ¿Las reglas de negocio relevantes están en el documento de dominio?
- ¿La especificación cubre contrato, dominio y criterios de validación?
- ¿El trabajo se hará en un hilo nuevo con el contexto reconstruido desde
  archivos?
- ¿Los tests derivados de la spec están planificados?
- ¿El modelo seleccionado para la tarea es el más barato que la resuelve bien?
  (ver [model-routing.md](model-routing.md))

---

## 11. Antipatrones prohibidos

- ❌ Generar código sin spec aprobada.
- ❌ Reusar el mismo hilo para múltiples features.
- ❌ Editar código manualmente en lugar de iterar la spec.
- ❌ Inferir reglas de negocio "al vuelo" en lugar de leer `business-rules.md`.
- ❌ Crear skills genéricas tipo "utils" o "helpers".
- ❌ Saltar el escaneo de seguridad antes del commit.
- ❌ Usar Opus 4.7 para tareas que Sonnet 4.6 o DeepSeek resuelven igual de bien.
