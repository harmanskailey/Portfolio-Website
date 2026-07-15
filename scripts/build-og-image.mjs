import { fileURLToPath } from "node:url";
import sharp from "sharp";

const source = fileURLToPath(new URL("../public/og-card.svg", import.meta.url));
const output = fileURLToPath(new URL("../public/og-card.png", import.meta.url));

await sharp(source).png({ compressionLevel: 9 }).toFile(output);
console.log("Generated public/og-card.png (1200×630)");
