/**
 * Imagen representativa de una nota, para las tarjetas de redes sociales.
 *
 * Se prefiere `heroImage` del frontmatter cuando existe, porque es la elección
 * explícita de quien escribe. Si no está, se usa la primera figura del cuerpo:
 * en estas notas es casi siempre el mapa o gráfico principal.
 */

/**
 * Ruta de la primera imagen del markdown, relativa a la carpeta de notas.
 *
 * @param {string} markdown Cuerpo de la nota, sin frontmatter.
 * @returns {string | null}
 */
export function firstImagePath(markdown) {
  if (!markdown) return null;
  // Se ignoran los bloques de código para no tomar una imagen de un ejemplo.
  const prose = markdown.replace(/```[\s\S]*?```/g, '');
  const match = prose.match(/!\[[^\]]*\]\(\s*([^)\s]+)/);
  const path = match?.[1];
  if (!path) return null;
  // Solo rutas locales: una URL remota no se puede optimizar en compilación.
  if (/^(https?:)?\/\//.test(path)) return null;
  return path.replace(/^\.\//, '');
}
