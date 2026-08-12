/**
 * Genera las imágenes de las tarjetas al compartir, una por nota con figura.
 *
 * Se hace fuera de Astro porque su servicio de imágenes no admite `fit` ni
 * `background`: al pedirle 1200x630 devuelve 949x630, y entonces Facebook
 * recorta a 1.91:1 por su cuenta y se lleva por delante el título y la fuente
 * que las figuras traen impresos. Aquí se rellena con blanco en vez de recortar,
 * lo que es invisible porque el fondo de los gráficos ya es claro.
 *
 * Se ejecuta antes de `astro dev` y de `astro build` (ganchos `predev` y
 * `prebuild`), de modo que la salida en `public/og/` siempre esté al día.
 */
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { firstImagePath } from '../src/lib/note-image.mjs';

const NOTES_DIR = new URL('../src/content/notes/', import.meta.url);
const OUTPUT_DIR = new URL('../public/og/', import.meta.url);

// 1200x630 es la proporción 1.91:1 que esperan Facebook, LinkedIn y X.
const WIDTH = 1200;
const HEIGHT = 630;
const FALLBACK_BACKGROUND = { r: 255, g: 255, b: 255 };

/**
 * Color de relleno tomado de la esquina superior izquierda de la propia figura.
 *
 * Las figuras tienen fondo gris azulado, no blanco: rellenar con blanco puro
 * dejaba dos franjas visibles a los costados. Tomando el color de la imagen, el
 * relleno desaparece.
 */
async function paddingColor(file) {
  try {
    const { data } = await sharp(file)
      .extract({ left: 0, top: 0, width: 1, height: 1 })
      .raw()
      .toBuffer({ resolveWithObject: true });
    return { r: data[0], g: data[1], b: data[2] };
  } catch {
    return FALLBACK_BACKGROUND;
  }
}

const frontmatterOf = (raw) => raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
const bodyOf = (raw) => raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '');
const heroImageOf = (frontmatter) =>
  frontmatter.match(/^heroImage:\s*['"]?([^'"\n]+?)['"]?\s*$/m)?.[1] ?? null;

await mkdir(OUTPUT_DIR, { recursive: true });

const entries = await readdir(NOTES_DIR);
const generated = [];

for (const entry of entries) {
  if (!entry.endsWith('.md') && !entry.endsWith('.mdx')) continue;

  const raw = await readFile(new URL(entry, NOTES_DIR), 'utf8');
  const frontmatter = frontmatterOf(raw);
  if (/^draft:\s*true\s*$/m.test(frontmatter)) continue;

  // Misma regla que usa la página: `heroImage` manda y, si no está, la primera
  // figura del cuerpo.
  const relative = heroImageOf(frontmatter) ?? firstImagePath(bodyOf(raw));
  if (!relative) continue;

  const source = new URL(relative, NOTES_DIR);
  if (!existsSync(source)) {
    console.warn(`[og] figura no encontrada, se omite: ${relative} (${entry})`);
    continue;
  }

  const slug = entry.replace(/\.mdx?$/, '');
  const file = fileURLToPath(source);
  const background = await paddingColor(file);
  const buffer = await sharp(file)
    .resize(WIDTH, HEIGHT, { fit: 'contain', background })
    .flatten({ background }) // descarta cualquier transparencia
    .jpeg({ quality: 82, progressive: true })
    .toBuffer();

  await writeFile(new URL(`${slug}.jpg`, OUTPUT_DIR), buffer);
  generated.push(`${slug}.jpg (${Math.round(buffer.byteLength / 1024)} kB)`);
}

console.log(
  generated.length
    ? `[og] ${generated.length} imagen(es) para compartir: ${generated.join(', ')}`
    : '[og] ninguna nota tiene figura; se usará /og.png',
);
