# Notas: lectura, navegación, difusión y métricas + auditoría de indexación

Fecha: 2026-08-12
Estado: aprobado, pendiente de implementación

## Contexto

`curvasidf.cl` es un sitio Astro estático desplegado en GitHub Pages. La raíz (`/`)
incrusta la aplicación Shiny en un `<iframe>` tras una pantalla de carga; el sitio
editorial vive en `/home`, `/metodologia`, `/historia` y `/notas`.

La colección `notes` tiene cuatro notas. Tres son breves (~330 palabras, 3 secciones).
`temporal-julio-2026` tiene ~7.000 palabras y 9 secciones, y es la que motiva este trabajo.

Estado verificado en producción al 2026-08-12:

- Las 9 URLs del sitio responden HTTP 200.
- `robots.txt` permite el rastreo completo y declara el sitemap.
- `sitemap-index.xml` → `sitemap-0.xml` lista las 9 URLs, **sin `lastmod`**.
- Search Console está verificado por DNS
  (`google-site-verification=xj3Qof3FBXmQTs0GYydusL2w5HynVDsSWfd28MmUjoQ`).
- Los encabezados del markdown ya reciben `id` automáticamente en el HTML construido.
- Las figuras se emiten como `<figure class="note-figure"><img …></figure>`.

## Objetivos

1. Garantizar que todas las páginas sean técnicamente indexables por Google, y entregar
   al autor un procedimiento concreto para verificar la indexación real en Search Console.
2. Dar a las notas tiempo estimado de lectura, índice de navegación, contador de visitas,
   botones de difusión e imágenes ampliables.
3. Exponer las notas recientes en la página editorial y en la pantalla de carga de la raíz.

## Fuera de alcance

- Cambiar la estructura de URLs del sitio.
- Mover la aplicación Shiny fuera de la raíz.
- Rediseñar la pantalla de carga (se conserva idéntica; solo se le suma una tarjeta).
- Analítica más allá del conteo de visitas por página.

## Decisiones tomadas

| Decisión | Elección | Motivo |
|---|---|---|
| Verificación de indexación | Auditoría técnica + checklist de Search Console | Sin credenciales de GSC no se puede leer el estado real de indexación |
| Contador de visitas | GoatCounter, código de sitio `curvasidf` | Gratis, sin cookies, con API pública de conteo por página |
| Instagram | Copiar enlace + abrir instagram.com | Instagram no expone URL de compartir web |
| Alcance por nota | Tiempo de lectura, difusión y contador en todas; índice solo con 5+ secciones | Un índice en una nota de 330 palabras es ruido |
| Layout de nota | Tres columnas: índice izq. · texto · etiquetas der. | Elegido por el autor |
| SEO de la raíz | Solo ajustes semánticos y la tarjeta de nota reciente | No se introduce texto oculto: Google lo trata como cloaking |

## Arquitectura

Cinco componentes nuevos en `src/components/`, más un archivo de configuración. Cada
componente es autónomo: recibe props explícitas, no lee estado global y puede probarse
mirando una sola página.

```
src/config/analytics.ts        → código de GoatCounter, único punto de configuración
src/lib/reading-time.mjs       → función pura: markdown → minutos
src/components/ShareBar.astro  → botones de difusión
src/components/VisitCounter.astro → conteo de visitas
src/components/NoteToc.astro   → índice lateral
src/components/Lightbox.astro  → ampliación de imágenes
src/components/RecentNoteCard.astro → tarjeta para la pantalla de carga
```

### `src/config/analytics.ts`

```ts
export const GOATCOUNTER_CODE = 'curvasidf';
export const goatcounterEndpoint = (path: string) =>
  `https://${GOATCOUNTER_CODE}.goatcounter.com/counter/${encodeURIComponent(path)}.json`;
```

Único punto de configuración. Si `GOATCOUNTER_CODE` es cadena vacía, no se inyecta el
script de seguimiento y el contador no se renderiza. Nada más del sitio depende de ello.

### `src/lib/reading-time.mjs`

Función pura `readingTime(markdown: string): number`. Elimina bloques de código, URLs,
sintaxis de imágenes y marcas de énfasis; cuenta palabras; divide por 200 palabras por
minuto; redondea hacia arriba con mínimo 1. Se invoca en tiempo de construcción desde
`src/pages/notas/[...slug].astro` usando `note.body`.

Valor esperado para `temporal-julio-2026`: entre 30 y 40 minutos.

### `ShareBar.astro`

Props: `url: string`, `title: string`.

Los enlaces de X, LinkedIn, Facebook y WhatsApp se construyen en tiempo de construcción
como `<a href>` con `target="_blank" rel="noopener"`. No requieren JavaScript.

| Red | URL |
|---|---|
| X | `https://twitter.com/intent/tweet?text={title}&url={url}` |
| LinkedIn | `https://www.linkedin.com/sharing/share-offsite/?url={url}` |
| Facebook | `https://www.facebook.com/sharer/sharer.php?u={url}` |
| WhatsApp | `https://wa.me/?text={title}%20{url}` |

Instagram y "Copiar enlace" requieren JavaScript:

- **Copiar enlace**: `navigator.clipboard.writeText(url)`; el botón muestra "¡Copiado!"
  durante 2 segundos y vuelve a su estado. Si `navigator.clipboard` no existe (contexto
  no seguro), se usa un `<input>` temporal con `document.execCommand('copy')`.
- **Instagram**: si `navigator.share` existe (móvil), abre el menú nativo del sistema, que
  lista Instagram. Si no, copia el enlace, muestra "Enlace copiado — pégalo en Instagram"
  y abre `https://www.instagram.com/` en una pestaña nueva.

Cada botón lleva `aria-label` descriptivo. El estado "¡Copiado!" se anuncia con
`aria-live="polite"`.

### `VisitCounter.astro`

Props: `path: string` (la ruta de la nota, p. ej. `/notas/temporal-julio-2026/`).

Renderiza `<span data-visit-counter data-path="…" hidden>`. En el cliente, tras
`astro:page-load`, hace `fetch` a `goatcounterEndpoint(path)` y espera `{"count": "1204"}`.
Al recibirlo, formatea el número con `Intl.NumberFormat('es-CL')`, lo inserta y quita
`hidden`.

**El elemento permanece oculto ante cualquier fallo**: red caída, respuesta no-200, JSON
inválido, o la opción pública desactivada en GoatCounter. No se muestra "0", ni un
esqueleto de carga, ni un mensaje de error. Un contador ausente es preferible a un
contador equivocado.

El script de seguimiento de GoatCounter se inyecta una sola vez en `EditorialLayout.astro`:

```html
<script data-goatcounter="https://curvasidf.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
```

Como el sitio usa `ClientRouter` (View Transitions), `count.js` solo contaría la primera
carga. Se añade un contador manual en `astro:page-load` que llama a
`window.goatcounter.count({ path: location.pathname })`, omitiendo la primera ejecución
para no duplicar la que ya hizo el script.

**Pendiente del autor**: activar en GoatCounter → Settings → *"Allow adding visitor counts
to your website"*. Sin esa opción, la API pública no responde y el contador queda oculto.

### `NoteToc.astro`

Props: `headings: { depth: number; slug: string; text: string }[]`.

Se alimenta del array `headings` que devuelve `render(note)` en
`src/pages/notas/[...slug].astro`. Filtra a `depth === 2`.

**Se renderiza solo si hay 5 o más encabezados de nivel 2.** Hoy eso significa únicamente
`temporal-julio-2026`; las otras tres notas (3 secciones) no lo muestran.

Comportamiento:

- Escritorio: columna izquierda `position: sticky`, encabezada por "En esta nota".
- La sección visible se resalta mediante un `IntersectionObserver` sobre los `<h2>`, con
  `rootMargin` que activa el resalte cuando el encabezado cruza el tercio superior del
  viewport.
- Móvil (≤ 840px): `<details>` colapsable sobre el texto, cerrado por defecto.
- Los enlaces son `<a href="#slug">` nativos, así que funcionan sin JavaScript; el resalte
  activo es el único comportamiento que lo requiere.
- Respeta `prefers-reduced-motion` para el desplazamiento suave.

### `Lightbox.astro`

Se incluye una vez en `NoteLayout.astro`. En `astro:page-load` recorre
`.prose figure.note-figure img` y a cada una le añade `cursor: zoom-in`, `role="button"`,
`tabindex="0"` y `aria-label="Ampliar imagen"`.

Al activarse (clic o Enter/Espacio) muestra un overlay a pantalla completa con la imagen a
tamaño completo y su leyenda (`<figcaption>`) debajo. Cierra con Esc, clic en el fondo, o
el botón de cerrar. Mientras está abierto se bloquea el desplazamiento del `<body>` y el
foco queda dentro del overlay; al cerrar, el foco vuelve a la imagen de origen.

Las imágenes ya son WebP optimizadas de gran tamaño (hasta 3415px de ancho), así que el
overlay usa el mismo `src`; no hace falta una segunda descarga.

### `RecentNoteCard.astro`

Props: `note` (la entrada más reciente de la colección).

Tarjeta compacta: eyebrow "Nota reciente", título, fecha, tiempo de lectura y "Leer nota →",
enlazada a la nota. Fondo de vidrio oscuro semitransparente.

En `src/pages/index.astro` se ancla abajo a la derecha de la pantalla de carga en
escritorio; en móvil (≤ 640px) pasa a flujo normal debajo del bloque central. Se desvanece
junto con el resto del loader cuando el `<iframe>` termina de cargar.

**La pantalla de carga no cambia en nada más**: logo, círculos concéntricos, barra animada,
el texto "Cargando plataforma de curvas IDF" y el enlace al sitio editorial se conservan
tal cual, con la misma animación y los mismos tiempos.

## Cambios en archivos existentes

### `src/layouts/NoteLayout.astro`

Nuevas props: `headings`, `readingMinutes`, `path`.

La cabecera pasa a mostrar, bajo la línea de autores:

```
Publicado el 6 de agosto de 2026 · 35 min de lectura · 1.204 visitas
[X] [LinkedIn] [Facebook] [WhatsApp] [Instagram] [Copiar enlace]
```

`ShareBar` va inmediatamente debajo de la línea de metadatos, tal como pidió el autor
("debajo del nombre de los autores").

El cuerpo pasa de dos a tres columnas:

```css
grid-template-columns: minmax(0, 240px) minmax(0, 760px) 1fr;
```

Cuando no hay índice (notas cortas), se conserva la rejilla de dos columnas actual. Bajo
840px, una sola columna: índice colapsable, texto, etiquetas al pie.

### `src/layouts/EditorialLayout.astro`

- Inyecta el script de GoatCounter y el conteo manual por View Transition.
- Enriquece el JSON-LD de tipo `Article`: añade `author` (array de `Person`),
  `dateModified` y `publisher` (`Organization` con el logo del sitio).

### `src/pages/notas/[...slug].astro`

Calcula `readingMinutes` con `readingTime(note.body)`, obtiene `headings` de `render(note)`
y pasa ambos, más la ruta canónica, a `NoteLayout`.

### `src/pages/index.astro`

- Carga las notas con `getCollection` y toma la más reciente no-borrador.
- Renderiza `RecentNoteCard`.
- Envuelve el logo del loader en un `<h1>` (sin cambio visual alguno).
- Añade `og:url`, `og:type`, `og:locale` y las etiquetas `twitter:*` que hoy faltan.

### `src/pages/home.astro`

El bloque de notas cambia de título: eyebrow "Notas y recursos" → **"Notas recientes"**,
y el `<h2>` "Claves para usar las curvas IDF" → **"Lo último publicado"**.

### `astro.config.mjs`

`@astrojs/sitemap` recibe un `serialize` que añade `lastmod` a cada URL de nota, tomando
`updatedAt` si existe y `publishedAt` en caso contrario.

## Compatibilidad con View Transitions

El sitio usa `ClientRouter`. Todo el JavaScript de esta especificación se engancha a
`astro:page-load`, no a `DOMContentLoaded`, y es idempotente: al reejecutarse sobre un DOM
ya inicializado no debe duplicar listeners ni observadores. Cada script marca los elementos
que ya procesó con un atributo `data-*` y omite los marcados.

Este es el modo de fallo más probable de todo el trabajo: funciona en carga directa y se
rompe al navegar de una nota a otra. La verificación lo cubre explícitamente.

## Manejo de errores

| Fallo | Comportamiento |
|---|---|
| GoatCounter no responde o devuelve error | El contador permanece oculto; el resto de la página intacta |
| Opción pública desactivada en GoatCounter | Igual que el anterior |
| `navigator.clipboard` ausente | Respaldo con `<input>` temporal y `execCommand('copy')` |
| `navigator.share` ausente | Instagram cae al flujo de copiar enlace + abrir instagram.com |
| JavaScript desactivado | Enlaces de difusión funcionan; índice navega por anclas; imágenes se ven normales; contador oculto |
| Nota sin encabezados de nivel 2 | No se renderiza el índice; rejilla de dos columnas |

## Verificación

Antes de publicar, con `npm run dev` en local:

1. `/notas/temporal-julio-2026/` muestra índice a la izquierda, texto al centro, etiquetas
   a la derecha; el resalte del índice sigue al desplazamiento.
2. `/notas/como-leer-curvas-idf/` **no** muestra índice y conserva su layout de dos columnas.
3. Tiempo de lectura presente en las cuatro notas, con valores plausibles.
4. Cada botón de difusión abre la URL correcta con el título y enlace correctos.
5. "Copiar enlace" copia y confirma visualmente.
6. Clic en una figura la amplía; Esc y clic al fondo la cierran; el foco vuelve a la imagen.
7. **Navegar de una nota a otra sin recargar**: índice, lightbox, contador y copiar siguen
   funcionando. Esta es la prueba que más importa.
8. `/home` muestra "Notas recientes".
9. `/` conserva el loader idéntico, con la tarjeta de nota reciente al costado.
10. En móvil (viewport 390px): índice colapsable, tarjeta en flujo normal, botones de
    difusión sin desbordar.
11. `npm run build` sin errores; `dist/sitemap-0.xml` contiene `lastmod` en las notas.

## Entregable de documentación

`docs/seo/checklist-google-search-console.md`: procedimiento paso a paso para que el autor
verifique la indexación real, URL por URL — Inspección de URL, solicitud de indexación,
lectura del informe de Páginas, y qué significa y qué hacer con cada estado
("Descubierta: sin indexar", "Rastreada: sin indexar", "Página alternativa con etiqueta
canónica adecuada", etc.).
