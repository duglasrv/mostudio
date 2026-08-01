# RVstudio — Portafolio de Fotografía de Omar Rivera

## Identidad del proyecto
Sitio estático (HTML/CSS/JS, sin build, sin backend) que sirve como portafolio
de fotografía personal de Omar Rivera, bajo la marca **RVstudio** (misma marca
que su portafolio de desarrollador en `rvstudio.dev`). No es un producto
comercial con usuarios ni base de datos — es una vitrina + formulario de
contacto + lista de precios.

> Este proyecto usa una versión **liviana** de Spec-Driven Development: los
> 5 pilares del método global aplican, pero adaptados a un sitio estático
> (sin NestJS/Prisma/multi-tenant). Ver `docs/methodology.md` y
> `docs/global-rules.md` para el marco completo; `docs/architecture.md` y
> `docs/business-rules.md` son la fuente de verdad **de este proyecto**.

## Stack real (NO el stack global por defecto)
- Template base: **Mostudio** (Colorlib, Bootstrap 4, jQuery) — licencia CC BY 3.0
- Sin framework, sin build step, sin package.json
- Lightbox: Magnific Popup (`js/jquery.magnific-popup.min.js`)
- Formulario de contacto: **Formspree** (`https://formspree.io/f/xgvyrvkv`,
  endpoint compartido con el portafolio de developer de Omar por decisión
  explícita suya)
- Deploy objetivo: **Vercel** (framework preset "Other", sin build command)
  en el subdominio `foto.rvstudio.dev` (pendiente de confirmar DNS)
- Repo: https://github.com/duglasrv/mostudio (rama `main`)

## Reglas críticas de este proyecto
- **NUNCA** reintroducir el script de Google Maps del template original —
  usaba una API key compartida de Colorlib apuntada a Nueva York, no
  funcional. Se eliminó a propósito.
- **NUNCA** publicar teléfono ni dirección exacta en `contact.html` — solo
  email + ciudad (decisión explícita de Omar, ver `business-rules.md`).
- **NUNCA** agregar enlaces a Instagram u otras redes — Omar decidió no
  mostrar redes sociales en el sitio.
- Mantener el link de atribución a Colorlib en el footer de TODAS las
  páginas — es requisito de la licencia CC BY 3.0 del template, no opcional.
- Nombres de archivos de fotos en `images/portfolio/` siempre descriptivos
  por categoría (`quince-verde-*`, `retrato-urbano-*`, `paisaje-*`, etc.) —
  nunca dejar nombres tipo `WhatsApp Image...`.
- El logo/marca del sitio es **RVstudio** (no "Omar Rivera", no "Mostudio").
- Precios en Quetzales (Q), nunca USD.

## Skills relevantes
| Trigger | Skill |
|---------|-------|
| Cambios de precios, paquetes, textos de negocio | Editar `docs/business-rules.md` primero, luego el HTML |
| Nuevas fotos | Seguir convención de nombres de `docs/architecture.md` §Imágenes |
| Deploy / dominios | Ver `docs/architecture.md` §Deploy |

## Memoria
- `memory/` — bitácora del proyecto (vacía por ahora, usar formato
  `YYYY-MM-DD.md` para entradas nuevas)
- Engram (`mem_save` / `mem_search`) — **pendiente de resolver**: el
  auto-detect de proyecto falla por ambigüedad de cwd cuando se invoca desde
  `Documents` en general. Debería funcionar automáticamente si una sesión de
  Claude Code se abre con working directory **dentro de esta carpeta**
  (`C:\Users\domar\Documents\mostudio`). Hay un `.engram/config.json` con
  `{"project": "mostudio"}` ya preparado para cuando eso ocurra.
