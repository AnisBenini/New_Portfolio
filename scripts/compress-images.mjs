/**
 * compress-images.mjs
 * Converts all PNG/JPG/JPEG images in src/work to optimized WebP files.
 * Replaces originals with .webp versions (same name, new extension).
 * Run with: node scripts/compress-images.mjs
 */

import sharp from "sharp";
import { readdir, stat, unlink, rename } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WORK_DIR = path.join(__dirname, "../src/work");

// Quality settings — tweak if needed (80 is a good balance)
const WEBP_QUALITY = 82;
// Max width in pixels — images wider than this get scaled down
const MAX_WIDTH = 1800;

async function* walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkDir(fullPath);
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      yield fullPath;
    }
  }
}

function formatBytes(bytes) {
  return (bytes / 1024).toFixed(1) + " KB";
}

async function processImage(filePath) {
  const before = (await stat(filePath)).size;
  const ext = path.extname(filePath);
  const webpPath = filePath.replace(new RegExp(`${ext}$`, "i"), ".webp");

  try {
    await sharp(filePath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(webpPath);

    const after = (await stat(webpPath)).size;
    const saved = (((before - after) / before) * 100).toFixed(0);

    // Remove the original after successful conversion
    await unlink(filePath);

    console.log(
      `✅  ${path.relative(WORK_DIR, filePath).padEnd(60)} ${formatBytes(before).padStart(10)} → ${formatBytes(after).padStart(10)}   (${saved}% smaller)`
    );
    return { before, after };
  } catch (err) {
    console.error(`❌  Failed: ${filePath}\n    ${err.message}`);
    // Clean up failed webp if it exists
    try { await unlink(webpPath); } catch {}
    return { before, after: before };
  }
}

async function main() {
  console.log("🖼️  Image compression starting...\n");
  console.log(`   Source dir : ${WORK_DIR}`);
  console.log(`   Quality    : ${WEBP_QUALITY}`);
  console.log(`   Max width  : ${MAX_WIDTH}px\n`);
  console.log("-".repeat(100));

  let totalBefore = 0;
  let totalAfter = 0;
  let count = 0;

  for await (const filePath of walkDir(WORK_DIR)) {
    const { before, after } = await processImage(filePath);
    totalBefore += before;
    totalAfter += after;
    count++;
  }

  console.log("-".repeat(100));
  console.log(`\n📊  Summary: ${count} images processed`);
  console.log(
    `    Before : ${formatBytes(totalBefore)} total`
  );
  console.log(
    `    After  : ${formatBytes(totalAfter)} total`
  );
  console.log(
    `    Saved  : ${formatBytes(totalBefore - totalAfter)} (${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(0)}%)`
  );
  console.log(
    `\n⚠️  Original files removed. Update any hardcoded .png/.jpg references to .webp if needed.`
  );
}

main().catch(console.error);
