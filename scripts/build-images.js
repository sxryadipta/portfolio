// Generates AVIF, WebP, and JPEG variants at 3 breakpoints for every
// source image, so the picture partial can serve responsive/modern formats.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const SOURCE_DIR = path.join(__dirname, "../src/assets/images/source");
const OUTPUT_DIR = path.join(__dirname, "../src/assets/images/generated");
const WIDTHS = [480, 960, 1600];
const FORMATS = ["avif", "webp", "jpeg"];

async function processImage(filename) {
  const inputPath = path.join(SOURCE_DIR, filename);
  const baseName = path.parse(filename).name;

  for (const width of WIDTHS) {
    for (const format of FORMATS) {
      const outputName = `${baseName}-${width}w.${format}`;
      const outputPath = path.join(OUTPUT_DIR, outputName);

      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .toFormat(format, { quality: format === "jpeg" ? 82 : 75 })
        .toFile(outputPath);

      console.log(`Generated: ${outputName}`);
    }
  }
}

async function run() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs
    .readdirSync(SOURCE_DIR)
    .filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

  for (const file of files) {
    await processImage(file);
  }

  console.log(`Done. Processed ${files.length} source image(s).`);
}

run().catch((err) => {
  console.error("Image build failed:", err);
  process.exit(1);
});