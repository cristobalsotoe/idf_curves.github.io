/**
 * Tiempo estimado de lectura de un texto en markdown.
 *
 * 200 palabras por minuto es el promedio habitual de lectura de prosa en
 * español para público general. Se descuenta la sintaxis de markdown para que
 * las URLs largas y las rutas de imágenes no inflen el conteo.
 */
const WORDS_PER_MINUTE = 200;

/**
 * @param {string} markdown Cuerpo de la nota, sin frontmatter.
 * @returns {number} Minutos redondeados hacia arriba, mínimo 1.
 */
export function readingTime(markdown) {
  if (!markdown) return 1;

  const text = markdown
    .replace(/```[\s\S]*?```/g, ' ') // bloques de código
    .replace(/`[^`]*`/g, ' ') // código en línea
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // imágenes
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // enlaces: conservar solo el texto
    .replace(/<[^>]+>/g, ' ') // HTML incrustado
    .replace(/https?:\/\/\S+/g, ' ') // URLs sueltas
    .replace(/^[>#\-*+|:\s]+/gm, ' ') // marcas de bloque y tablas
    .replace(/[*_~]/g, ' '); // énfasis

  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}
