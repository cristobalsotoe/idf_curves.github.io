---
title: "Cómo leer una curva IDF sin perderse entre líneas"
summary: "Una guía breve para interpretar intensidad, duración y período de retorno, y entender qué puede —y qué no puede— responder una curva IDF."
publishedAt: 2026-01-20
authors: ["Equipo Curvas IDF Chile"]
category: "Guía"
tags: ["Curvas IDF", "Diseño hidráulico", "Interpretación"]
featured: true
sources:
  - label: "Soto-Escobar et al. (2026), Hydrology and Earth System Sciences"
    url: "https://doi.org/10.5194/hess-30-91-2026"
---

Una curva IDF resume una relación estadística entre tres variables: la **intensidad** de la precipitación, su **duración** y la **frecuencia** con que un evento de esa magnitud puede ser igualado o superado.

Las tres dimensiones deben leerse juntas. Una intensidad aislada no describe adecuadamente un evento si no sabemos durante cuánto tiempo ocurre ni el período de retorno asociado.

## Los tres ejes de la pregunta

La **intensidad** suele expresarse como una tasa de precipitación, por ejemplo milímetros por hora. No es el volumen total de lluvia, sino la rapidez con que precipita durante una ventana temporal.

La **duración** corresponde al intervalo sobre el que se acumula y promedia la precipitación. En este proyecto se analizaron 11 duraciones entre 1 y 72 horas.

El **período de retorno** representa una frecuencia estadística. Un evento asociado a 100 años no significa que sucederá exactamente una vez por siglo ni que, después de ocurrir, exista un siglo de seguridad.

> El período de retorno debe interpretarse como una medida probabilística, no como un calendario de eventos.

## Cómo comparar dos curvas

Para una misma duración, las curvas asociadas a períodos de retorno mayores suelen mostrar intensidades más altas. Para un mismo período de retorno, la intensidad promedio suele disminuir al aumentar la duración.

Una lectura práctica sigue este orden:

1. Definir la ubicación de interés.
2. Seleccionar una duración coherente con el proceso o la obra analizada.
3. Elegir el período de retorno según el nivel de riesgo y la normativa aplicable.
4. Leer la intensidad estimada y revisar la fuente de datos utilizada.
5. Contrastar el resultado con información local y criterio profesional.

## Lo que una curva no resuelve por sí sola

Una curva IDF no reemplaza un estudio hidrológico, no describe la distribución temporal completa de una tormenta y no elimina la incertidumbre del dato o del ajuste estadístico. Tampoco determina por sí sola el estándar de diseño que corresponde a una obra.

La plataforma permite explorar estimaciones de manera consistente, pero su uso responsable exige considerar la calidad de los datos, el contexto territorial y las consecuencias de la decisión.
