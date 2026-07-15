import { readFile, readdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const targets = [
  { directory: "src/assets/cooking", maxWidth: 2200, quality: 84 },
  { directory: "src/assets/img", maxWidth: 1800, quality: 86 },
];

for (const target of targets) {
  const directory = path.join(root, target.directory);
  const names = await readdir(directory);

  for (const name of names) {
    if (!/\.(jpe?g)$/i.test(name)) continue;

    const imagePath = path.join(directory, name);
    const sourceBuffer = await readFile(imagePath);
    const originalMetadata = await sharp(sourceBuffer).metadata();
    const requiresSanitizing =
      Boolean(
        originalMetadata.exif || originalMetadata.xmp || originalMetadata.iptc,
      ) ||
      (originalMetadata.width ?? 0) > target.maxWidth ||
      (originalMetadata.height ?? 0) > target.maxWidth;

    if (!requiresSanitizing) {
      console.log(`${target.directory}/${name}: already sanitized`);
      continue;
    }

    const buffer = await sharp(sourceBuffer)
      .rotate()
      .resize({
        width: target.maxWidth,
        height: target.maxWidth,
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({ quality: target.quality, mozjpeg: true })
      .toBuffer();

    const metadata = await sharp(buffer).metadata();
    if (metadata.exif || metadata.xmp || metadata.iptc) {
      throw new Error(`Metadata remained in ${target.directory}/${name}`);
    }

    await writeFile(imagePath, buffer);

    console.log(
      `${target.directory}/${name}: ${metadata.width}×${metadata.height}, ${Math.round(buffer.length / 1024)} KB`,
    );
  }
}
