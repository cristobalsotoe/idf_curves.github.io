/**
 * Índice de una nota a partir de los encabezados que devuelve `render()`.
 *
 * Solo se usan los encabezados de nivel 2: son las secciones que estructuran la
 * nota. Un índice de tres entradas en una nota de dos minutos es ruido, así que
 * hay un umbral mínimo por debajo del cual no se muestra.
 */
export const TOC_MIN_HEADINGS = 5;

/**
 * @param {{ depth: number; slug: string; text: string }[]} headings
 * @returns {{ depth: number; slug: string; text: string }[]}
 */
export function tocEntries(headings = []) {
  return headings.filter((heading) => heading.depth === 2 && heading.slug && heading.text);
}

/**
 * @param {{ depth: number; slug: string; text: string }[]} entries
 * @returns {boolean}
 */
export function shouldShowToc(entries = []) {
  return entries.length >= TOC_MIN_HEADINGS;
}
