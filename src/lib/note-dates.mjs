import { readdir, readFile } from 'node:fs/promises';

/**
 * Fecha de última modificación de cada nota, indexada por su URL pública.
 *
 * El sitemap se genera en la configuración de Astro, fuera del alcance de
 * `getCollection()`, así que las fechas se leen directamente del frontmatter.
 * Se usa `updatedAt` cuando existe y `publishedAt` en caso contrario.
 *
 * @param {URL} notesDir Carpeta de las notas.
 * @returns {Promise<Map<string, string>>} URL → fecha ISO.
 */
export async function noteLastmodByUrl(notesDir) {
  const lastmod = new Map();

  let entries;
  try {
    entries = await readdir(notesDir);
  } catch {
    return lastmod;
  }

  for (const entry of entries) {
    if (!entry.endsWith('.md') && !entry.endsWith('.mdx')) continue;

    const raw = await readFile(new URL(entry, notesDir), 'utf8');
    const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1];
    if (!frontmatter) continue;
    if (/^draft:\s*true\s*$/m.test(frontmatter)) continue;

    const read = (key) =>
      frontmatter.match(new RegExp(`^${key}:\\s*['"]?(\\d{4}-\\d{2}-\\d{2})`, 'm'))?.[1];
    const date = read('updatedAt') ?? read('publishedAt');
    if (!date) continue;

    const slug = entry.replace(/\.mdx?$/, '');
    lastmod.set(`https://curvasidf.cl/notas/${slug}/`, new Date(`${date}T00:00:00Z`).toISOString());
  }

  return lastmod;
}
