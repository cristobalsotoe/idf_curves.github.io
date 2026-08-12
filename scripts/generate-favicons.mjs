/**
 * Deriva los iconos del sitio desde `public/favicon.png` (512x512).
 *
 * Google documenta que el favicon debe ser cuadrado y múltiplo de 48px, y como
 * respaldo busca `/favicon.ico` en la raíz. El original de 512px no cumple lo
 * primero y el `.ico` no existía, así que aquí se generan ambos.
 *
 * Se ejecuta antes de `astro dev` y `astro build`, junto con las imágenes para
 * compartir.
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const SOURCE = new URL('../public/favicon.png', import.meta.url);
const PUBLIC_DIR = new URL('../public/', import.meta.url);

/** Múltiplos de 48, como pide Google. */
const SIZES = [48, 96, 192];
/** Tamaño estándar del icono de pantalla de inicio en iOS. */
const APPLE_TOUCH = 180;
/** El icono que se empaqueta dentro del .ico. */
const ICO_SIZE = 48;

const png = (size) =>
  sharp(fileURLToPath(SOURCE)).resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();

/**
 * Envuelve un PNG en un contenedor ICO.
 *
 * El formato admite PNG incrustado desde Windows Vista, así que basta con
 * anteponer la cabecera de 22 bytes; no hace falta convertir a mapa de bits.
 */
function pngToIco(pngBuffer, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reservado
  header.writeUInt16LE(1, 2); // tipo: 1 = icono
  header.writeUInt16LE(1, 4); // cantidad de imágenes

  const entry = Buffer.alloc(16);
  entry.writeUInt8(size === 256 ? 0 : size, 0); // ancho (0 significa 256)
  entry.writeUInt8(size === 256 ? 0 : size, 1); // alto
  entry.writeUInt8(0, 2); // colores de la paleta
  entry.writeUInt8(0, 3); // reservado
  entry.writeUInt16LE(1, 4); // planos
  entry.writeUInt16LE(32, 6); // bits por píxel
  entry.writeUInt32LE(pngBuffer.byteLength, 8); // tamaño de la imagen
  entry.writeUInt32LE(header.byteLength + entry.byteLength, 12); // desplazamiento

  return Buffer.concat([header, entry, pngBuffer]);
}

const written = [];

for (const size of SIZES) {
  const name = `favicon-${size}x${size}.png`;
  await writeFile(new URL(name, PUBLIC_DIR), await png(size));
  written.push(name);
}

await writeFile(new URL('apple-touch-icon.png', PUBLIC_DIR), await png(APPLE_TOUCH));
written.push('apple-touch-icon.png');

await writeFile(new URL('favicon.ico', PUBLIC_DIR), pngToIco(await png(ICO_SIZE), ICO_SIZE));
written.push('favicon.ico');

console.log(`[icons] ${written.join(', ')}`);
