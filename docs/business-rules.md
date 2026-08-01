# Reglas de negocio — RVstudio (mostudio)

Tabla de la verdad del dominio. Si el código o el contenido del sitio
contradice este documento, este documento gana — corregir el sitio, no al
revés.

## Identidad / marca
| Campo | Valor |
|-------|-------|
| Nombre público | Omar Rivera |
| Marca / logo del sitio | **RVstudio** |
| Ciudad | Ciudad de Guatemala, Guatemala |
| Email de contacto | omarsubuyuc@gmail.com |
| Años de experiencia (mostrados en el sitio) | +9 años tomando fotos |
| Redes sociales en el sitio | **Ninguna** — decisión explícita, no agregar Instagram ni otras |
| Teléfono en el sitio | **No se publica** |
| Dirección exacta | **No se publica** — solo ciudad |

## Posicionamiento
Portafolio de **pasión que empieza a monetizarse**, no un estudio
profesional consolidado. El copy del sitio debe sonar genuino/cercano, no
"vendedor". No inflar el posicionamiento con lenguaje corporativo.

## Paquetes de precios (`pricing.html`)
| Paquete | Precio | Incluye |
|---------|--------|---------|
| **Instante** | Q900 | Sesión 1–2 horas, 10–15 fotos editadas, entrega digital |
| **Momento** | Q1,150 | Sesión 1–2 horas, 20–25 fotos editadas, 1 reel corto, entrega digital |
| **Legado** | Q1,500 | Cobertura completa, 30+ fotos editadas, 2–3 reels, edición de color/estilo detallada, entrega digital |

Reglas asociadas:
- **Bodas y XV años NO entran en estos 3 paquetes** — requieren cobertura de
  varias horas; se cotizan aparte (sección "¿Boda o XV años?" en
  `pricing.html`, redirige a `contact.html`).
- **Movilización**: incluida dentro de Ciudad de Guatemala. Fuera de la
  ciudad se cotiza aparte según distancia — nunca poner un monto fijo sin
  que Omar lo confirme explícitamente.
- **Extras opcionales** (álbum físico impreso, fotos adicionales, video
  extra): se cotizan aparte, no tienen precio fijo publicado.
- **Forma de pago**: efectivo o tarjeta vía Recurrente. El link de pago
  **no se publica en el sitio** — se comparte por privado ya confirmada la
  sesión y el monto exacto (decisión explícita de Omar, para evitar que el
  link genérico quede indexado o que alguien pague el monto equivocado).
- Los precios pueden subir con el tiempo; si Omar pide ajustar montos,
  actualizar tanto `pricing.html` como esta tabla en el mismo cambio.

## Formulario de contacto (`contact.html`)
- Backend: Formspree, endpoint `https://formspree.io/f/xgvyrvkv`.
- **Este endpoint es compartido** con el portafolio de developer de Omar
  (`duglasrv` / RVstudio dev). Fue una decisión explícita suya no separarlo
  — implica que los leads de fotografía llegan mezclados con los de
  desarrollo de software al mismo inbox. Si en el futuro pide separarlos,
  crear un formulario nuevo en Formspree y solo cambiar el `action` del
  `<form>`.
- Campos: nombre, email (`_replyto`, para que Formspree configure
  Reply-To automáticamente), asunto, mensaje.

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
