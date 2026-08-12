/**
 * Configuración de analítica (GoatCounter).
 *
 * Punto único de configuración. Si `GOATCOUNTER_CODE` queda como cadena vacía,
 * no se inyecta el script de seguimiento y el contador de visitas no se muestra;
 * el resto del sitio sigue funcionando igual.
 *
 * Requisito en el panel de GoatCounter:
 *   Settings → marcar «Allow using the visitor counter».
 * Sin esa opción el endpoint público devuelve 403 y el contador queda oculto.
 */
export const GOATCOUNTER_CODE = 'curvasidf';

/** URL del script de seguimiento, o null si no hay código configurado. */
export const goatcounterScript = GOATCOUNTER_CODE
  ? `https://${GOATCOUNTER_CODE}.goatcounter.com/count`
  : null;

/**
 * Endpoint público de conteo para una ruta.
 *
 * GoatCounter registra la ruta tal como la envía `count.js` (`location.pathname`),
 * y aquí se consulta con ese mismo valor, de modo que ambas coinciden por
 * construcción. Las rutas sin datos responden 404 con `{"count":"0"}`.
 */
export const goatcounterEndpoint = (path: string) =>
  GOATCOUNTER_CODE
    ? `https://${GOATCOUNTER_CODE}.goatcounter.com/counter/${path}.json`
    : null;
