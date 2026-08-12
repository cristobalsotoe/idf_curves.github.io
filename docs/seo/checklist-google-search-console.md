# Verificar la indexación de curvasidf.cl en Google Search Console

Última revisión técnica: 2026-08-12

Este documento es para ti, no para el sitio. La parte técnica ya está resuelta en el
código; lo que sigue solo puede hacerse desde Search Console, con tu cuenta.

---

## 1. Qué ya está resuelto en el código

No hace falta que verifiques nada de esto: está comprobado.

| Elemento | Estado |
|---|---|
| Las 9 URLs responden HTTP 200 | ✅ Verificado en producción |
| `robots.txt` permite el rastreo completo | ✅ `User-agent: * / Allow: /` |
| `sitemap-index.xml` declarado en `robots.txt` | ✅ |
| Sitemap lista las 9 URLs | ✅ |
| Sitemap incluye `lastmod` en cada nota | ✅ Añadido el 2026-08-12 |
| Etiqueta `canonical` en cada página | ✅ Absoluta y con barra final |
| Metadatos Open Graph y Twitter Card | ✅ Incluida la raíz, que no los tenía |
| Datos estructurados `Article` en las notas | ✅ Con `author`, `dateModified` y `publisher` |
| La raíz tiene un `<h1>` | ✅ Añadido el 2026-08-12 |
| Propiedad verificada en Search Console | ✅ Por registro DNS TXT |

## 2. El punto débil que conviene vigilar

`https://curvasidf.cl/` es un `<iframe>` a la aplicación Shiny. Aunque ahora tiene un
`<h1>`, la nota reciente y enlaces internos, sigue siendo una página con poco texto
propio. Google puede clasificarla como de bajo valor.

**Qué observar:** si en el informe de Páginas la raíz aparece como "Rastreada: sin indexar"
de forma persistente durante más de un mes, la solución de fondo es invertir la
estructura — que `curvasidf.cl/` sea la página editorial y la aplicación pase a
`/plataforma`. Es un cambio mayor, con redirecciones, así que solo vale la pena si el
problema se confirma.

Las otras ocho páginas tienen texto propio abundante y no deberían presentar este problema.

---

## 3. Procedimiento en Search Console

Entra en [search.google.com/search-console](https://search.google.com/search-console) y
selecciona la propiedad `curvasidf.cl`.

### Paso 1 — Confirmar que el sitemap se leyó

Menú lateral → **Sitemaps**.

- Si no aparece `sitemap-index.xml`, agrégalo en "Añadir un sitemap nuevo":
  escribe `sitemap-index.xml` y envía.
- Si ya está, revisa la columna **Estado**: debe decir "Correcto" y mostrar
  9 páginas descubiertas.
- Si dice "No se ha podido obtener", espera 24 h y vuelve a mirar; Google reintenta solo.

### Paso 2 — Ver el panorama general

Menú lateral → **Páginas** (bajo "Indexación").

Verás dos cifras: páginas indexadas y páginas no indexadas. Baja a la tabla
"Por qué no se indexan las páginas". Los estados que puedes encontrar:

| Estado | Qué significa | Qué hacer |
|---|---|---|
| **Descubierta: actualmente sin indexar** | Google conoce la URL pero aún no la ha rastreado | Esperar. Es normal en sitios nuevos o de bajo tráfico. Puedes acelerar con el Paso 3. |
| **Rastreada: actualmente sin indexar** | Google la leyó y decidió no incluirla | Señal de contenido considerado de poco valor. Ver la sección 2 si es la raíz. |
| **Página alternativa con etiqueta canónica adecuada** | Correcto, no es un error | Nada. Google agrupó URLs equivalentes. |
| **Excluida por etiqueta noindex** | Hay un `noindex` en la página | No debería ocurrir: el sitio no usa `noindex`. Avísame si aparece. |
| **Error de redirección / 404** | La URL no resuelve | No debería ocurrir: las 9 responden 200. Avísame si aparece. |

### Paso 3 — Inspeccionar cada URL, una por una

Pega cada dirección en la **barra de búsqueda superior** de Search Console (la que dice
"Inspeccionar cualquier URL") y pulsa Enter.

```
https://curvasidf.cl/
https://curvasidf.cl/home/
https://curvasidf.cl/notas/
https://curvasidf.cl/notas/temporal-julio-2026/
https://curvasidf.cl/notas/como-leer-curvas-idf/
https://curvasidf.cl/notas/del-paper-a-la-plataforma/
https://curvasidf.cl/notas/precipitacion-media-vs-intensidad-maxima/
https://curvasidf.cl/metodologia/
https://curvasidf.cl/historia/
```

Para cada una:

1. Si dice **"La URL está en Google"** → listo, no hagas nada más.
2. Si dice **"La URL no está en Google"** → pulsa **"Solicitar indexación"**.
   Google tarda entre unas horas y unos días. Hay un límite diario de solicitudes;
   si se agota, continúa al día siguiente.
3. En cualquier caso, pulsa **"Probar URL publicada"** → **"Ver página rastreada"** →
   pestaña **HTML**, y comprueba que el texto de la nota aparece ahí. Si el HTML llega
   vacío o incompleto, avísame: sería un problema de renderizado, no de indexación.

**Empieza por `temporal-julio-2026`**: es la nota más extensa y la de mayor potencial de
búsqueda.

### Paso 4 — Confirmar qué está indexado hoy

En el buscador de Google, escribe:

```
site:curvasidf.cl
```

Eso lista lo que Google tiene indexado del dominio. Es una aproximación —
Search Console es la fuente autoritativa— pero sirve para una comprobación rápida.

Para una página concreta:

```
site:curvasidf.cl/notas/temporal-julio-2026/
```

Sin resultados significa que esa página aún no está indexada.

---

## 4. Plazos realistas

- **Solicitud de indexación**: de horas a unos días.
- **Sitio nuevo sin enlaces externos**: Google puede tardar semanas en rastrear todo.
- **`lastmod` recién añadido**: se notará en el próximo rastreo, no de inmediato.

La indexación no se compra ni se fuerza. Lo que sí acelera de verdad es que otros sitios
enlacen a las notas: CR2, la universidad, redes sociales, prensa. Un solo enlace desde un
sitio con autoridad hace más que veinte solicitudes de indexación.

---

## 5. Cuándo volver a revisar

Marca una revisión en **dos semanas**. Si para entonces alguna nota sigue sin indexar
pese a haberla solicitado, avísame con el estado exacto que muestra Search Console y lo
diagnosticamos con ese dato concreto.
