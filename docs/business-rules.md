# Reglas de negocio — RVstudio (mostudio)

Tabla de la verdad del dominio. Si el código o el contenido del sitio
contradice este documento, este documento gana — corregir el sitio, no al
revés.

## Identidad / marca
| Campo | Valor |
|-------|-------|
| Nombre público | Omar Rivera |
| Marca / logo del sitio | **RV Studio** (con espacio — rebranding desde "RVstudio", 2026-08-17) |
| Tagline oficial | "Tus momentos pasan. Tu historia permanece." |
| Posicionamiento de servicio | Fotografía · Film · Content |
| Ciudad | Ciudad de Guatemala, Guatemala |
| Email de contacto | omarsubuyuc@gmail.com (se evaluó mover a email de dominio propio tipo `hola@rvstudio.dev`; Omar decidió mantener el Gmail por ahora, 2026-08-17) |
| Años de experiencia (mostrados en el sitio) | +9 años tomando fotos |
| Redes sociales en el sitio | **Ninguna** — decisión explícita, no agregar Instagram ni otras |
| Teléfono en el sitio | **No se publica** |
| Dirección exacta | **No se publica** — solo ciudad |

## Posicionamiento
Estudio fotográfico con proceso y experiencia definidos ("Fotografía · Film
· Content"), pero sin fingir ser un estudio corporativo consolidado que no
es — sigue siendo el trabajo personal de Omar. El copy del sitio debe sonar
genuino/cercano, con autoridad de proceso (planificación, dirección,
edición), no "vendedor" ni inflado con lenguaje corporativo.

## Paquetes de precios (`pricing.html`)
> Actualizado 2026-08-17: primero blueprint de mejoras v2.0, luego afinado
> por Omar en un catálogo digital propio (`rvstudio-catalogo.html`) que
> subió posiciones/cantidades más definidas. **Este catálogo de Omar es la
> fuente de verdad** para horas, cantidades y qué incluye cada paquete.

| Paquete | Precio | Incluye |
|---------|--------|---------|
| **Instante** | Q900 | Sesión hasta 2 horas, dirección y guía durante toda la sesión, 20–25 fotografías cuidadosamente seleccionadas y editadas, corrección de luz/color/estilo, galería digital privada, **USB con todas las fotografías incluida**. Ideal para: retratos, parejas, contenido personal, graduaciones, sesiones sencillas. |
| **Momento** ⭐ paquete estrella | Q1,250 | Sesión hasta 3 horas, planificación previa, dirección creativa con orientación de poses/composición, 35–45 fotografías cuidadosamente seleccionadas y editadas, 1 reel vertical, galería digital privada, **USB incluida** |
| **Legado** | Q1,500 | Sesión hasta 4 horas, planificación personalizada + asesoría de ubicación/vestuario, dirección extendida con posibilidad de varios escenarios/looks, 55–70+ fotografías cuidadosamente seleccionadas y editadas, retoque de color avanzado, 2 reels verticales, galería digital privada, **USB incluida** |

Reglas asociadas:
- **USB física con todas las fotografías va incluida en los 3 paquetes**
  (decisión de Omar en el catálogo v3, 2026-08-17) — **ya NO es un
  complemento pagado aparte**. Antes de este cambio se ofrecía como "USB
  con fotos digitales" cotizada aparte; se retiró de la lista de
  complementos y se movió a "incluye" en cada paquete.
- **Bodas y XV años NO entran en estos 3 paquetes** — requieren cobertura de
  varias horas; se cotizan aparte (sección "¿Tienes un evento especial?" en
  `pricing.html`, redirige a `contact.html`).
- **Movilización**: incluida dentro de Ciudad de Guatemala. Fuera de la
  ciudad se cotiza aparte según distancia — nunca poner un monto fijo sin
  que Omar lo confirme explícitamente.
- **Complementos** ("Personaliza tu experiencia", reemplaza el antiguo
  bloque "Extras opcionales"):
  | Complemento | Precio publicado |
  |-------------|-------------------|
  | Reel adicional | Desde Q250 |
  | Highlight film | Desde Q450 |
  | Álbum físico impreso | Cotización aparte según formato/cantidad |
  | Fotografías adicionales | Cotización aparte según cantidad |
- **Forma de pago**: efectivo o tarjeta vía Recurrente. El link de pago
  **no se publica en el sitio** — se comparte por privado ya confirmada la
  sesión y el monto exacto (decisión explícita de Omar, para evitar que el
  link genérico quede indexado o que alguien pague el monto equivocado).
- Los precios pueden subir con el tiempo; si Omar pide ajustar montos,
  actualizar tanto `pricing.html` como esta tabla en el mismo cambio.
- **Regla interna, NO publicar en el sitio**: nunca entregar una fotografía
  solo para alcanzar el número mínimo del paquete. Si la sesión produjo 67
  excelentes, entregar 67. Si solo 28 son realmente buenas, entregar 28 y
  comunicarlo. La promesa es calidad, no volumen — referencia para
  estimados de eventos por hora: 3h ≈ 100–150+ fotos, 5h ≈ 200–300+, 8h ≈
  400–600+ (no publicados como tabla en el sitio, solo referencia interna).

## Proceso de trabajo (sección "¿Qué pasa después de reservar?")
Nueva sección en `pricing.html` (agregada 2026-08-17) que documenta el
proceso en 6 pasos para justificar el precio frente a fotógrafos informales:
1. Conversamos — brief de estilo, lugar y objetivo.
2. Nos preparamos — ubicación, horario, vestuario.
3. Creamos juntos — dirección durante la sesión, no hace falta saber posar.
4. Seleccionamos y editamos — edición individual por fotografía.
5. Recibes tu historia — galería digital privada, alta resolución + redes.
6. Conserva más (opcional) — álbumes, impresiones, productos físicos.

## Formulario de contacto (`contact.html`)
- Backend: Formspree, endpoint `https://formspree.io/f/xgvyrvkv`.
- **Este endpoint es compartido** con el portafolio de developer de Omar
  (`duglasrv` / RVstudio dev). Fue una decisión explícita suya no separarlo
  — implica que los leads de fotografía llegan mezclados con los de
  desarrollo de software al mismo inbox. Si en el futuro pide separarlos,
  crear un formulario nuevo en Formspree y solo cambiar el `action` del
  `<form>`.
- Campos (actualizado 2026-08-17): nombre, email (`_replyto`, para que
  Formspree configure Reply-To automáticamente), tipo de sesión o evento
  (campo `subject`, reemplaza el antiguo "asunto" genérico), fecha
  tentativa (`event_date`), mensaje.
- Debajo del email de contacto en el sidebar se muestra "Respondo en menos
  de 24 horas." — compromiso de tiempo de respuesta, mantenerlo realista si
  se vuelve a tocar esta copy.

## Categorías de fotografía (portafolio)
Categorías reales que Omar fotografía, en orden de peso en el portafolio:
1. Bodas / XV años (la más numerosa)
2. Eventos religiosos (cultos, alabanza en vivo)
3. Eventos sociales (revelación de género, etc.)
4. Retrato urbano / nocturno
5. Graduaciones
6. Paisaje / arquitectura (Antigua Guatemala, lago de Atitlán) — trabajo
   personal, no necesariamente para clientes

## Decisiones editoriales tomadas (no revertir sin que Omar lo pida)
- Galería sin agrupar por "álbumes de evento" — Omar probó esa versión y
  prefirió el grid plano simple con "Ver más".
- Fotos icónicas fijas al inicio de la galería (en este orden):
  `naturaleza-macro-01`, `graduacion-01`, `quince-verde-anillo-01`,
  `religioso-banda-02`, `quince-verde-nino-01`, `retrato-artistico-ojo-01`,
  `retrato-urbano-01`, `retrato-urbano-02`, `retrato-urbano-05`,
  `arquitectura-antigua-02`, `paisaje-atardecer-01`, `revelacion-genero-02`.
- Fotos eliminadas del portafolio por decisión de Omar (no reincorporar sin
  que las pida de vuelta): `quince-verde-abrazo-papa-01` (reemplazada en
  home por `-02`), `paisaje-atardecer-04`, `religioso-banda-01`,
  `paisaje-vista-ciudad-01`, `paisaje-montana-casa-01`,
  `quince-azul-grupo-familia-02`, `quince-verde-grupo-familia-01`
  (reemplazada en home por `quince-azul-grupo-familia-01`),
  `paisaje-atardecer-02`, `religioso-alabanza-01`, `quince-verde-detalle-01`.
