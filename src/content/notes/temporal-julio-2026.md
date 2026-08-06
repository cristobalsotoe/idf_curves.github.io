---
title: "¿Cuán excepcional fue el temporal del 15 al 20 de julio de 2026?"
summary: "Entre esas fechas, un sistema frontal dejó precipitaciones intensas y persistentes entre Atacama y Ñuble, uno de al menos tres temporales que afectaron a Chile en julio de 2026. Analizamos cuán inusual fue la lluvia en cada territorio y qué duraciones resultaron más críticas."
publishedAt: 2026-08-05
authors: ["Cristóbal Soto-Escobar"]
category: "Datos"
tags: ["Eventos extremos", "Período de retorno", "Chile"]
featured: true
sources:
  - label: "Soto-Escobar et al. (2026), Hydrology and Earth System Sciences"
    url: "https://doi.org/10.5194/hess-30-91-2026"
  - label: "SENAPRED, balance del sistema frontal al 23 de julio de 2026 (La Tercera)"
    url: "https://www.latercera.com/nacional/noticia/balance-por-sistema-frontal-13-fallecidos-3532-personas-damnificadas-1553-albergadas-y-mas-de-29-mil-viviendas-danadas/"
  - label: "MOP, estimación de reconstrucción al 27 de julio de 2026 (La Tercera)"
    url: "https://www.latercera.com/nacional/noticia/mop-estima-hasta-us-700-millones-para-reconstruccion-en-atacama-y-coquimbo-tras-temporal/"
  - label: "CTMIN, impacto en minería (Acero y Roca)"
    url: "https://aceroyroca.com/2026/07/30/noticias-ctmin-informe-impacto-temporales-mineria-chile/"
  - label: "SNA, balance del sistema frontal"
    url: "https://www.sna.cl/2026/07/20/balance-sistema-frontal/"
  - label: "Dirección General de Aguas, boletines hidrológicos"
    url: "https://dga.mop.gob.cl/servicios-de-informacion/boletines/"
---

Entre esas fechas, un sistema frontal dejó precipitaciones intensas y persistentes entre Atacama y Ñuble, uno de al menos tres temporales que afectaron a Chile en julio de 2026. Analizamos cuán inusual fue la lluvia en cada territorio y qué duraciones resultaron más críticas.

## 1. Qué tan extremas fueron las precipitaciones en distintos lugares de Chile

En 72 horas, ERA5-Land estima cerca de 214 milímetros de lluvia en un punto del valle del Limarí, en Coquimbo, y unos 160 milímetros en Punitaqui, apenas 90 kilómetros al sur. Las cantidades son del mismo orden, pero su grado de excepcionalidad no. En Punitaqui el ajuste sitúa el evento en 101 años de período de retorno. En el Limarí, **supera los 500 años**. Este resultado no debe leerse como una fecha probable de repetición, sino como una señal de que el evento quedó muy lejos de los valores usados para ajustar el modelo.

El contraste resume la idea central de este artículo: **la cantidad de lluvia precipitada por sí sola no determina el carácter excepcional de una tormenta**. Una acumulación elevada puede ser relativamente habitual en un clima lluvioso y, a la vez, una cantidad menor puede resultar extraordinaria en una zona árida. El grado de excepcionalidad depende de los milímetros acumulados, de su duración y de la climatología del lugar.

Un análisis anterior del CR2 explicó la configuración meteorológica del temporal. Aquí abordamos la pregunta estadística pendiente: qué tan anómala fue la lluvia entre Atacama y Ñuble y qué podemos afirmar, con los datos disponibles, sobre un evento que en algunas zonas no tiene precedentes en el período analizado.

## 2. Cómo medimos qué tan anómalo o improbable fue este evento

Examinamos la precipitación horaria mediante ventanas móviles de 6, 12, 24, 48 y 72 horas. En cada celda seleccionamos el intervalo más intenso de precipitación por cada duración. Así distinguimos dos variables relacionadas, pero diferentes: la **intensidad**, medida como la cantidad media de agua caída por hora, y la **acumulación**, que corresponde al total reunido durante la ventana. Una lluvia breve puede presentar una intensidad alta sin acumular tanto volumen, mientras que otra menos intensa puede acumular más agua si persiste durante varios días.

Luego comparamos esas intensidades con las curvas intensidad-duración-frecuencia de cada lugar. Estas curvas se construyeron a partir de los 41 máximos anuales de ERA5-Land entre 1981 y 2021, ajustados con una distribución de Gumbel estacionaria, siguiendo la metodología de [Soto-Escobar et al. (2026)](https://doi.org/10.5194/hess-30-91-2026). El resultado se expresa como período de retorno, T. Un T de 100 años significa que, según el ajuste a la función de probabilidad, una lluvia de esa magnitud o mayor tiene aproximadamente una probabilidad de 1 en 100 de ser excedida en un año cualquiera. No significa que ocurra regularmente una vez cada siglo ni que, después de observarla, comiencen cien años de espera.

Las estimaciones presentadas se obtuvieron a partir del producto grillado de precipitaciones de ERA5-Land. Este reanálisis representa la precipitación en celdas de aproximadamente 11 kilómetros de lado, cuya escala es útil para observar patrones regionales.

## 3. Cuánto y con qué intensidad llovió

**El rasgo decisivo del temporal fue la persistencia**. En la ventana de 6 horas, el máximo del área estudiada se ubicó en el valle del Limarí, cerca de Ovalle: unos 61 milímetros, equivalentes a una intensidad media de 10,2 milímetros por hora. Al ampliar la ventana, el máximo se desplazó hacia la cordillera: alrededor de 143 milímetros en las 24 horas más intensas y 288 milímetros en 72 horas. El golpe breve se concentró en el valle, mientras que la mayor acumulación de larga duración ocurrió en la montaña.

La Figura 1 muestra la intensidad máxima estimada y cómo cambia entre las cinco duraciones. Cada panel representa el intervalo continuo más intenso de su respectiva ventana de tiempo, en milímetros por hora, con una escala común que permite compararlos. Las intensidades medias disminuyen al ampliar la ventana porque los pulsos más fuertes se diluyen dentro de períodos más largos. Por eso las zonas azules se reducen y el patrón espacial se vuelve más uniforme. Esta lectura permite identificar el tipo de exigencia que enfrenta una obra: una alcantarilla urbana responde a escalas cortas, mientras una cuenca o un embalse integra lluvias de muchas horas o varios días. También anticipa un resultado clave: el interior de Atacama, donde se estiman los mayores períodos de retorno, no coincide con el máximo de intensidad absoluta.

![Figura 1](temporal-julio-2026/figuras/map_intensidad_maxima_era5land_grande.webp)

**Figura 1.** *Intensidad máxima estimada del temporal del 15 al 20 de julio de 2026, en milímetros por hora, para ventanas móviles de 6, 12, 24, 48 y 72 horas. Cada panel muestra, en cada celda, el intervalo continuo más intenso de esa duración. La escala es común a los cinco paneles, de modo que las intensidades son comparables entre sí. Estimaciones de ERA5-Land (Copernicus C3S) en celdas de 0,1°, corregidas por sesgo.*

La figura 2 repite el mapa de intensidad con un acercamiento a Atacama y Coquimbo. En 6 horas el contraste es máximo: el interior de Atacama, entre Copiapó y Tierra Amarilla, muestra las intensidades más bajas del recorte (menos de 0,5 mm/hr), mientras la franja costera e interior de Coquimbo, entre La Serena y el valle del Limarí, alcanza las más altas (hasta 10,5 mm/hr). Al ampliar la ventana ese núcleo azul se diluye: en 72 horas el interior de Atacama sigue bajo 0,5 mm/hr, Vallenar baja a 1-2 mm/hr y el entorno de La Serena y Combarbalá, que a las 6 horas lideraba el recorte, no supera los 4 mm/hr.

![Figura 2](temporal-julio-2026/figuras/map_intensidad_maxima_era5land_grande_atacama-coquimbo.webp)

**Figura 2.** *Intensidad máxima estimada del temporal, en milímetros por hora, para las ventanas de 6, 12, 24, 48 y 72 horas, con un acercamiento a Atacama y Coquimbo. Misma escala, paleta y fuente que la Figura 1.*

La figura 3 expresa la misma información como precipitación acumulada (multiplica la intensidad máxima por la duración de cada ventana). Los cinco paneles muestran entonces cuántos milímetros cayeron en las 6, 12, 24, 48 y 72 horas más intensas. Los cortes de la escala se separan progresivamente porque el rango aumenta desde unos 61 hasta 288 milímetros. Con intervalos constantes, las duraciones cortas quedarían comprimidas en pocos colores. Esto permite ver por qué la persistencia fue tan importante: el núcleo se desplaza del valle a la cordillera y la superficie con acumulaciones altas crece con la duración.

![Figura 3](temporal-julio-2026/figuras/map_lluvia_acumulada_maxima_era5land_grande.webp)

**Figura 3.** *Lluvia acumulada, en milímetros, dentro de la ventana más intensa de cada duración, obtenida al multiplicar la intensidad máxima de la figura 1 por su duración. No corresponde a la lluvia total de los seis días, sino al agua caída en las 6, 12, 24, 48 y 72 horas más intensas de cada celda, cuyo inicio puede variar de un punto a otro. Los cortes de la escala se separan progresivamente porque el rango crece desde unos 61 hasta 288 milímetros. Estimaciones de ERA5-Land (Copernicus C3S).*

La figura 4 repite el mapa de lluvia acumulada con el mismo acercamiento. El interior de Atacama permanece bajo los 5 mm en las cinco duraciones. El acumulado crece hacia el sur y con la duración: en 24 horas el entorno de La Serena y el valle del Limarí ya alcanza 60 a 100 mm, y en 72 horas ese núcleo, entre La Serena, Combarbalá y Punitaqui, llega a 220-300 mm, cerca del máximo de 288 milímetros citado en la sección 3.

![Figura 4](temporal-julio-2026/figuras/map_lluvia_acumulada_maxima_era5land_grande_atacama-coquimbo.webp)

**Figura 4.** *Lluvia acumulada, en milímetros, dentro de la ventana más intensa de cada duración, con un acercamiento a Atacama y Coquimbo. Misma escala, paleta y fuente que la Figura 3.*

Las figuras 3 y 4 no representan la lluvia total de los seis días. Muestran el acumulado dentro de la ventana más intensa de cada duración, cuyo inicio puede cambiar entre celdas. La lluvia total del evento aparece más adelante, en el panel izquierdo de la Figura 9. Distinguir ambas cantidades evita comparar dos mapas que, aunque hablan de acumulación, responden preguntas diferentes.

## 4. En qué lugares este evento no tuvo precedentes

Cuando preguntamos por excepcionalidad en lugar de cantidad, el orden territorial cambia. El núcleo aparece en el interior de la provincia de Huasco, en **Atacama**, cerca de los 28° S. Allí se localizan los mayores períodos de retorno estimados para 24, 48 y 72 horas. No fue la zona donde ERA5-Land estimó más milímetros por hora, sino donde esa lluvia se apartó más de la climatología local.

**Coquimbo** fue el segundo foco y el lugar donde la señal excepcional alcanzó mayor extensión regional. En 48 horas, el 47 % de su superficie superó el umbral de 500 años. En 72 horas, la proporción llegó al 64 %. Entre **Valparaíso, la Región Metropolitana y O'Higgins** predominó una señal más moderada y localizada. En estas regiones, la ventana de 48 horas fue más inusual que la de 72, lo que muestra que el período de retorno no aumenta necesariamente con la duración. En **Maule y Ñuble**, en cambio, predominaron valores bajos, aunque existieron focos acotados de mayor excepcionalidad.

La figura 5 es un mapa del período de retorno estimado para las cinco duraciones. La escala cierra en la categoría «más de 500 años»: todo lo que el ajuste sitúa por sobre ese umbral se agrupa en una sola clase abierta, porque con 41 años de registro no es responsable leerlo como una cifra puntual. Los paneles revelan que el área de precipitaciones más extremas se expande en las ventanas de 48 y 72 horas porque la persistencia de la lluvia fue mucho más anómala que los pulsos breves en el norte árido. Su importancia no radica en leer literalmente cada valor de la cola, sino en ubicar dónde el evento quedó fuera del registro histórico usado para el ajuste de la función de probabilidad (1981-2021) y dónde la extrapolación requiere mayor cautela. En 72 horas, el 20,5 % del área continental analizada supera los 500 años.

![Figura 5](temporal-julio-2026/figuras/map_periodo_retorno_era5land_1981-2021_grande.webp)

**Figura 5.** *Período de retorno estimado del temporal, en años, para las ventanas de 6, 12, 24, 48 y 72 horas, sobre el territorio continental. La escala va de 1 a «más de 500 años». La clase superior es abierta y agrupa todo lo que el ajuste sitúa por sobre ese umbral. Ajuste de Gumbel estacionario sobre los 41 máximos anuales de ERA5-Land entre 1981 y 2021, según la metodología de Soto-Escobar et al. (2026).*

La figura 6 repite el mismo mapa con un acercamiento a Atacama y Coquimbo, las regiones donde se concentró la señal excepcional del temporal. El acercamiento hace visible la secuencia. En 24 horas la clase superior (más de 500 años) aparece como focos aislados en el interior del Huasco y en torno a La Serena, rodeados de tonos anaranjados (50 a 150 años). En 48 horas esos focos se unen en una franja continua entre Copiapó y el Limarí. En 72 horas esa franja cubre casi todo el interior de ambas regiones y se prolonga hacia el sur hasta el entorno de Combarbalá y Punitaqui, donde da paso a naranjas y rojos (100 a 400 años). Al sur de Punitaqui, el mapa vuelve a tonos azules (bajo los 20 años) en las cinco duraciones.

![Figura 6](temporal-julio-2026/figuras/map_periodo_retorno_era5land_1981-2021_grande_atacama-coquimbo.webp)

**Figura 6.** *Período de retorno estimado del temporal, en años, para las ventanas de 6, 12, 24, 48 y 72 horas, con un acercamiento a Atacama y Coquimbo, las dos regiones donde se concentró la señal excepcional del evento. Misma escala, fuente y metodología que la Figura 5.*

## 5. Este mapa no se lee literalmente: qué incertidumbre presentan estas estimaciones

El mapa anterior muestra la salida matemática del ajuste, pero los valores más altos no deben interpretarse como frecuencias observables. Vallenar permite ver el problema. En 24 horas, el temporal de 2026 alcanzó una intensidad media de 2,3 milímetros por hora y fue el segundo mayor de los 41 años analizados, inferior al máximo de 1997. Su período de retorno empírico es cercano a 21 años. Sin embargo, la distribución de Gumbel ajustada le asigna 235 años.

Esa diferencia entre ambos valores es, en sí misma, un resultado del análisis y no una anomalía del cálculo. En un régimen árido la mayoría de los años registran máximos pequeños y solo unos pocos alcanzan valores altos: la climatología local es muy estrecha. El parámetro de escala del ajuste recoge esa estrechez, y por eso un aumento moderado de intensidad produce un salto grande de T. Lo que el número expresa es el contraste entre el evento y el clima que lo rodea, que en Atacama es mucho mayor que en el sur para la misma cantidad de agua. Por eso conviene leer T junto al registro observado: el ajuste indica cuán lejos quedó el evento de su climatología, y el registro, cuántas veces se ha alcanzado antes esa magnitud. Las dos lecturas son complementarias.

La figura 7 compara las curvas intensidad-duración-frecuencia con la curva del evento en tres lugares: Vallenar, el valle del Limarí y Punitaqui. En cada panel, las líneas cálidas representan períodos de retorno entre 2 y 500 años, mientras los once puntos azules siguen al temporal entre 1 y 72 horas. La forma de la curva azul explica por qué la duración importa, ya que en Vallenar permanece dentro de un T = 25 años para una duración de 12 horas o menos y se aleja hacia períodos de retorno más altos al prolongarse la lluvia. En Punitaqui asciende de la misma forma, pero sin salirse del rango de las curvas de referencia. El aporte del gráfico consiste en reemplazar un valor aislado de T por la trayectoria completa del evento.

![Figura 7](temporal-julio-2026/figuras/fig_idf_evento_Dtodas.webp)

**Figura 7.** *Curvas intensidad-duración-frecuencia de ERA5-Land frente a la intensidad estimada del temporal, en tres celdas representativas: Vallenar (Atacama), el valle del Limarí (Coquimbo) y Punitaqui (Coquimbo). Las líneas cálidas son las curvas IDF para períodos de retorno de 2, 5, 10, 25, 50, 100, 200 y 500 años. Los once puntos azules unidos son la intensidad máxima del evento en cada duración analizada, entre 1 y 72 horas. Las bandas sombreadas corresponden al intervalo de confianza del 90 % de las curvas de 10 y 500 años, obtenido por remuestreo. Ambos ejes son logarítmicos y la escala vertical es propia de cada panel para mostrar el rango local de intensidades.*

Para acotar la estimación repetimos mil veces el ajuste, remuestreando con reemplazo los 41 máximos anuales. El ejercicio entrega dos lecturas, y la primera es la más útil: en Vallenar a 48 horas, **incluso el extremo inferior del intervalo de confianza del 90 % se sitúa en 963 años**. Es decir, con la hipótesis más conservadora que admiten los datos, el temporal supera con holgura cualquier período de retorno de diseño de uso corriente. La segunda lectura es que el extremo superior del intervalo llega a valores mayores a 500 años, lo que indica hasta qué punto la magnitud del evento excede el rango del registro disponible.

La figura 8 abre el modelo y permite comprobarlo. Es una grilla de nueve paneles: las filas corresponden a Vallenar, el valle del Limarí y Punitaqui, y las columnas a 24, 48 y 72 horas. Cada panel muestra los 41 máximos anuales, la recta de Gumbel, su banda de confianza y la posición asignada al evento. La línea vertical marca el límite del registro, y a su derecha solo hay extrapolación. La grilla se ordena desde el régimen más árido hasta el menos árido de los tres, para comparar cómo cambia el comportamiento del mismo método. En Punitaqui, donde el registro casi alcanza el rango del evento, el punto de 2026 queda pegado a la nube de datos y el T ajustado se mantiene en un orden manejable: 18 años en 24 horas y 101 en 72. En Vallenar, en cambio, el punto de 2026 se sitúa muy por sobre la nube de datos, y esa distancia es una medida directa de cuánto se apartó el temporal de la climatología local. La figura permite entonces acompañar cada valor de T con la evidencia que lo sustenta y distinguir dos situaciones distintas: dónde la estimación se apoya en el registro y dónde describe un evento que no tiene equivalente en él.

![Figura 8](temporal-julio-2026/figuras/fig_gumbel_ajuste_3x3_top5_punitaqui.webp)

**Figura 8.** *Gráficos de probabilidad del ajuste de Gumbel, con las filas correspondientes a Vallenar, el valle del Limarí y Punitaqui, y las columnas a las duraciones de 24, 48 y 72 horas. Los puntos grises son los 41 máximos anuales de ERA5-Land entre 1981 y 2021. Los cuatro puntos blancos rotulados son los años de mayor magnitud después del récord, y el punto azul, el temporal de 2026. La recta es el ajuste y la banda su intervalo de confianza del 90 %. La línea vertical gris marca el límite del registro, con el año del máximo histórico: a su derecha los valores provienen de extrapolación. La escala vertical es propia de cada panel.*

## 6. Cómo nos afectó: cronología de la lluvia y las emergencias

El temporal avanzó de sur a norte. La lluvia se concentró primero en Maule y Biobío, el 15 y 16 de julio. Alcanzó la zona central el 17 y llegó con mayor intensidad a Coquimbo y Atacama el 19 y 20. El máximo horario del análisis se estimó cerca de los 30,6° S el 19 de julio a las 21:00, con 11,2 milímetros por hora.

Durante esos seis días, el MOP registró **649 reportes de emergencia de infraestructura** en el área estudiada: 240 leves, 255 moderados, 135 graves y 19 muy graves. La Dirección de Vialidad concentró 461 registros. Coquimbo sumó 311 y Atacama 110, que juntas reunieron el 65 % de los reportes. El 20 de julio, cuando la precipitación ya se había desplazado al norte, se informó el máximo diario, con 238 emergencias.

La figura 9 reúne tres vistas complementarias: el acumulado total de lluvia del evento, la localización y gravedad de los reportes MOP, y un diagrama de la evolución horaria por latitud. En el panel derecho, el eje horizontal representa el tiempo, el vertical la latitud, los colores la intensidad máxima de cada franja y los puntos los reportes. El diagrama usa el máximo sobre todas las longitudes de cada banda, no su promedio, para que un núcleo intenso no se diluya al combinar cordillera, valle y costa. La banda de precipitación se desplaza de sur a norte y los reportes se concentran en las horas y franjas donde pasa el sistema. La composición permite reconstruir la secuencia del evento y el efecto de las lluvias en los eventos de emergencia.

![Figura 9](temporal-julio-2026/figuras/fig_hovmoller_emergencias_3paneles_era5land.webp)

**Figura 9.** *Evolución de la lluvia y de las emergencias durante el temporal, en tres vistas. A la izquierda, la lluvia total acumulada del evento, en milímetros. Al centro, la localización de los 649 reportes de emergencia de infraestructura del MOP entre el 15 y el 20 de julio de 2026, con el tamaño y el color según su gravedad. A la derecha, la evolución conjunta: el eje horizontal es la fecha y hora en horario continental de Chile, el vertical la latitud y el color la intensidad horaria máxima estimada en cada franja, tomada sobre todas las longitudes continentales de la banda y no promediada. Los puntos son los mismos reportes situados en su hora y su latitud. Fuentes: ERA5-Land (Copernicus C3S) y emergencias de infraestructura del MOP.*

El avance del sistema frontal se tradujo en daños sobre la infraestructura a medida que recorría el territorio. Los reportes aparecen en las mismas franjas de latitud y en las mismas horas por las que pasa la banda de precipitación, y se intensifican donde la lluvia se prolonga: las emergencias graves y muy graves se concentran en Coquimbo y Atacama, justamente las regiones donde la precipitación fue más persistente y más excepcional respecto de su climatología. En la franja entre 31° y 30° S, la mediana de la hora de reporte ocurrió 9,2 horas después del máximo de lluvia, un desfase consistente con el tiempo que tardan las cuencas en concentrar el escurrimiento y con el que toma catastrar y comunicar cada emergencia en terreno. Las duraciones largas, que fueron las más anómalas del evento, son también las que gobiernan la respuesta de las cuencas y las obras que fallaron.

El balance humano y material fue amplio. Según el [balance de SENAPRED del 23 de julio](https://www.latercera.com/nacional/noticia/balance-por-sistema-frontal-13-fallecidos-3532-personas-damnificadas-1553-albergadas-y-mas-de-29-mil-viviendas-danadas/), el sistema frontal iniciado el día 14 dejó, entre Atacama y La Araucanía, 13 personas fallecidas, 3.532 damnificadas, 61.557 aisladas y 150 viviendas destruidas. El MOP [estimó el 27 de julio](https://www.latercera.com/nacional/noticia/mop-estima-hasta-us-700-millones-para-reconstruccion-en-atacama-y-coquimbo-tras-temporal/) entre US$400 y US$500 millones para recuperar daños en Coquimbo y la provincia de Huasco, y hasta US$700 millones al incorporar pasivos acumulados en caminos, recursos hídricos y telecomunicaciones. Es una proyección preliminar de costos de reconstrucción, no una medición directa del daño atribuible al temporal.

En minería, la Coordinadora de Trabajadores de la Minería (CTMIN) [proyectó](https://aceroyroca.com/2026/07/30/noticias-ctmin-informe-impacto-temporales-mineria-chile/) un impacto global de US$120 a US$235 millones entre el 13 y el 26 de julio en cinco regiones. La estimación combina producción perdida, sobrecostos operacionales, logística de emergencia y efectos indirectos, y depende de supuestos sobre extracción y precio del cobre.

## 7. Efectos hidrológicos y sectoriales desiguales

El temporal también modificó las reservas de agua. Los 25 embalses monitoreados por la DGA pasaron de 3.713 a 5.215 millones de metros cúbicos entre los [boletines hidrológicos](https://dga.mop.gob.cl/servicios-de-informacion/boletines/) del 13 y del 27 de julio. En conjunto, estaban 21,1 % por debajo del volumen de 2025 antes del evento y quedaron 10,8 % por encima después. El cambio fue especialmente marcado en Coquimbo: La Paloma pasó de 35,9 a 202,2 millones de metros cúbicos, Cogotí de 15,2 a 123,1, y Recoleta alcanzó su capacidad.

En el sector agrícola, la SNA [informó el 20 de julio](https://www.sna.cl/2026/07/20/balance-sistema-frontal/) que no observaba afectaciones significativas en la producción, aunque sí reportó daños importantes en caminos, puentes, sistemas de riego, redes eléctricas y conectividad rural. La [cifra de hasta US$200 millones](https://www.radioagricultura.cl/noticias/economia/sna-alerta-danos-por-hasta-us200-millones-en-el-agro-tras-sistema-frontal_20260720/) difundida esos días provenía de estimaciones preliminares de terceros, no de un cálculo propio de la SNA. El aumento de las reservas y la continuidad productiva no compensan ni relativizan los daños: sus efectos se distribuyen de manera desigual entre cuencas, actividades y comunidades.

## 8. Qué revela este análisis

El resultado más consistente es que **la excepcionalidad del temporal fue un fenómeno de duración, no de intensidad horaria**. La superficie que supera los 500 años de período de retorno es nula en las ventanas de 6 y 12 horas, apenas 0,8 % en 24 horas, sube a 14,2 % en 48 horas y llega a 20,5 % en 72 horas. Lo que hizo extraordinario a este evento no fue ninguna hora en particular, sino que la lluvia no se detuviera durante tres días sobre un territorio semiárido.

Ese hallazgo tiene una consecuencia práctica inmediata: **la duración crítica cambia según el territorio**. En Atacama y Coquimbo la señal máxima está en 72 horas. Entre Valparaíso, la Región Metropolitana y O'Higgins, en 48 horas, y no en la ventana más larga. El período de retorno no aumenta automáticamente con la duración, de modo que una obra debe evaluarse con la ventana que gobierna su respuesta y no con la más extensa disponible.

El análisis también muestra que **cantidad y excepcionalidad se separan en el espacio**. La mayor intensidad estimada se ubicó en el valle del Limarí, con 10,2 milímetros por hora en 6 horas. Los mayores períodos de retorno, en cambio, quedaron varios grados de latitud más al norte, en el interior de la provincia de Huasco, con intensidades bastante menores. Dos lugares pueden recibir acumulaciones comparables y representar situaciones estadísticas muy distintas para sus respectivas climatologías. En 72 horas, el valle del Limarí acumuló 214 milímetros y Punitaqui, 90 kilómetros más al sur, 160.

Finalmente, esa distribución territorial **se corresponde con la de los daños**. El 65 % de los reportes de emergencia del MOP se concentró en Coquimbo y Atacama, las dos regiones donde el evento resultó más excepcional, y el máximo diario de reportes se produjo el 20 de julio, cuando la lluvia ya se había desplazado al extremo norte del área analizada.

## 9. Cómo podemos estar mejor preparados

El temporal no tuvo el mismo carácter estadístico en toda la zona afectada. En Atacama y Coquimbo, lo excepcional fue la persistencia durante 48 y 72 horas. Entre Valparaíso y O'Higgins destacó la ventana de 48 horas. En Maule y Ñuble, la mayor parte del evento permaneció dentro de lo conocido. Esta diversidad impide resumir el temporal con una sola cifra y recuerda que cada sistema hídrico responde a escalas temporales distintas.

Esa misma diversidad explica por qué el diseño hidráulico no puede apoyarse en una cifra única para todo el país. Cada obra necesita saber cuánta lluvia esperar en el lugar donde está emplazada y en la duración que gobierna su respuesta, que no es la misma para una alcantarilla urbana que para el vertedero de un embalse. Con ese objetivo desarrollamos **curvasIDF.cl**, una herramienta abierta de análisis de precipitaciones extremas y apoyo al diseño hidráulico en Chile.

La herramienta entrega las curvas intensidad-duración-frecuencia de cualquier punto del territorio, para el rango de duraciones y períodos de retorno que se requiera, con la misma base metodológica empleada en este artículo.

Herramienta: [**curvasidf.cl**](https://curvasidf.cl/)  
Artículo: Soto-Escobar, C., Zambrano-Bigiarini, M., Tolorza, V., and Garreaud, R.: Developing Intensity-Duration-Frequency (IDF) curves using sub-daily gridded and in situ datasets: characterising precipitation extremes in a drying climate, Hydrol. Earth Syst. Sci., 30, 91–117, [https://doi.org/10.5194/hess-30-91-2026](https://doi.org/10.5194/hess-30-91-2026)