# Arquitectura — RVstudio (mostudio)

## Resumen
Sitio estático multi-página, sin build, sin backend propio. Cinco páginas
HTML comparten el mismo shell (aside con logo/nav/footer + `<main>`),
copiado manualmente en cada archivo (no hay un layout compartido real porque
no hay motor de plantillas — es HTML plano).

## Páginas
| Archivo | Rol |
|---------|-----|
| `index.html` | Home — 9 fotos destacadas en filas alternadas (imagen + texto), cada una linkea a `gallery.html` |
| `gallery.html` | Galería completa — grid plano de 3 columnas. 12 fotos visibles al cargar, resto oculto (`d-none`) y revelado por `js/load-more.js` en tandas de 12 vía el botón "Ver más" |
| `about.html` | Bio de Omar, foto de fondo decorativa (`images/portfolio/paisaje-lago-atitlan-01.jpg`) |
| `pricing.html` | 3 paquetes (Instante / Momento / Legado, con badge "Más elegido" en Momento) + sección "¿Qué pasa después de reservar?" (proceso en 6 pasos) + bloque de notas (complementos "Personaliza tu experiencia", movilización, forma de pago, cotización para bodas/XV años/eventos) |
| `contact.html` | Formulario → Formspree + datos de contacto (solo email + ciudad) |
| `single.html`, `main.html` | **Sobras del template original, sin usar ni enlazadas desde ningún nav.** No editar salvo que se decida reactivarlas o borrarlas. |

## Imágenes
- `images/portfolio/` — todas las fotos reales de Omar, ya renombradas.
  Convención: `{categoria}-{subcategoria?}-{numero}.jpg`, ej.
  `quince-verde-anillo-01.jpg`, `retrato-urbano-03.jpg`, `paisaje-luna-01.jpg`.
- `images/*.jpg` en la raíz de `images/` (work-1.jpg, person_1.jpg, etc.) son
  **placeholders originales del template**, ya no referenciados por ninguna
  página activa — se dejaron por si el template los necesita para otra
  variante (`single.html`, `main.html`).
- Cualquier foto nueva que Omar quiera agregar: pedirle el archivo, revisar
  contenido, renombrar con la convención de arriba, copiar a
  `images/portfolio/`, y solo entonces referenciarla en el HTML. Nunca dejar
  nombres originales tipo `WhatsApp Image 2026-...jpeg`.

## Interactividad (JS)
- **Lightbox**: Magnific Popup, clase `.image-popup` sobre el `<a>` que
  envuelve cada foto. Inicializado globalmente en `js/main.js` (aplica a
  todas las páginas por igual — en `gallery.html` todas las fotos visibles
  comparten una sola galería de lightbox, sin agrupar por álbum/evento; esto
  fue una decisión explícita de Omar tras probar una versión con álbumes
  separados que no le gustó — no reintroducir esa idea sin que la pida de
  nuevo).
- **Load more** (`js/load-more.js`): revela `.portfolio-wrap-2.d-none` en
  tandas de `BATCH_SIZE = 12`, oculta el botón cuando ya no queda nada.
  Solo se usa en `gallery.html`.
- **Formulario de contacto**: `<script>` inline al final de `contact.html`,
  usa `fetch()` contra `form.action` (Formspree), sin recargar la página.
  Requiere `Accept: application/json` en headers para que Formspree responda
  JSON en vez de redirigir.

## Deploy
- **Estado**: en producción.
- Vercel, importando `https://github.com/duglasrv/mostudio` directo
  (framework preset **Other** — es HTML estático, no hay build command ni
  output directory especial).
- **Dominio**: `photography.rvstudio.dev` — subdominio del `.dev` que Omar
  ya tiene para su portafolio de developer (`rvstudio.dev`), en vez de
  comprar un dominio nuevo o reusar la raíz. DNS ya conectado y funcionando.
- El template trae un `<script>` de Google Maps con una API key de Colorlib
  compartida — **se eliminó de todas las páginas activas**, no está
  funcional y no hace falta (no hay dirección exacta pública).

## Licencia del template
Mostudio es CC BY 3.0 (Colorlib) — el link de atribución en el footer
(`Template por <a href="https://colorlib.com">Colorlib.com</a>`) **debe
mantenerse** en todas las páginas por requisito de licencia. El propio
`readme.txt` del template advierte que quitarlo sin licencia paga puede
causar suspensión del hosting/dominio — Omar confirmó explícitamente
(2026-08-17) mantenerlo tal cual, no comprar la licencia por ahora.

## Tarjetas de precio — overlay de foto (`pricing.html`)
Las 3 tarjetas de paquete (`.pricing .img`) usan una foto de fondo con un
overlay negro semitransparente (`.pricing .img::after`). El overlay base
del template es 30% opacidad; en `pricing.html` se sobreescribe a **82%**
vía un `<style>` inline en el `<head>` (`.pricing .img:after { opacity: .82; }`)
para que la foto quede desvanecida detrás y el foco visual sea el texto del
paquete — pedido explícito de Omar (2026-08-17) tras notar que las fotos
distraían de los precios/detalles.

## Marca — RV Studio (rebranding 2026-08-17)
- Nombre de marca actualizado de "RVstudio" (sin espacio) a **"RV Studio"**
  (con espacio), con posicionamiento "Fotografía · Film · Content" y
  tagline "Tus momentos pasan. Tu historia permanece.".
- Aparece en: `#colorlib-logo` (h1 del aside) + línea de posicionamiento
  debajo, `<title>` de cada página, meta description, y el texto de
  copyright del footer (`RV Studio | Template por Colorlib.com`).
- Ver `business-rules.md` §Identidad/marca para el detalle completo y el
  historial de la decisión.
