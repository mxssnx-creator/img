const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Compact dimensions matched to the reference crop
const width = 145;
const height = 73;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

ctx.antialias = 'subpixel';
ctx.patternQuality = 'best';
ctx.quality = 'best';
ctx.textDrawingMode = 'glyph';

// Light white background from the reference crop
ctx.fillStyle = '#fbfbfb';
ctx.fillRect(0, 0, width, height);

// Per-glyph placement keeps the original rhythm while changing only the last digit
const baselineY = 47;
const startX = 3;
const glyphs = [
  ['3', 0],
  ['0', 23],
  ['.', 43],
  ['0', 50],
  ['1', 71],
  ['.', 89],
  ['2', 96],
  ['0', 118],
  ['2', 139],
  ['6', 161],
];

ctx.font = 'normal 600 24px Arial, Helvetica, sans-serif';
ctx.fillStyle = '#474747';

for (const [glyph, offset] of glyphs) {
  ctx.fillText(glyph, startX + offset * 0.88, baselineY);
}

// Save with lossless PNG compression
const outputPath = path.join(__dirname, 'date_30.01.2026.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputPath, buffer);

console.log(`✅ Image generated: ${outputPath}`);
console.log(`📏 Dimensions: ${width}x${height}`);
console.log(`🎨 Style: White background with embossed gray text`);
