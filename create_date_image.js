const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Pixel-perfect dimensions matching original
const width = 400;
const height = 150;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Pure white background (exactly like original)
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, width, height);

// Date text - pixel-perfect positioning
const text = '30.01.2026';

// Font settings matching original exactly
ctx.font = '600 56px Arial, Helvetica, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Precise positioning (pixel-perfect)
const x = 200;
const y = 78;

// Multi-layer embossed effect (pixel-perfect)
// Layer 1: Deepest shadow (bottom-right)
ctx.fillStyle = '#c8c8c8';
ctx.fillText(text, x + 2, y + 2);

// Layer 2: Secondary shadow
ctx.fillStyle = '#d8d8d8';
ctx.fillText(text, x + 1, y + 1);

// Layer 3: Main text color (medium gray)
ctx.fillStyle = '#a8a8a8';
ctx.fillText(text, x, y);

// Layer 4: Highlight (top-left)
ctx.fillStyle = '#ffffff';
ctx.fillText(text, x - 1, y - 1);

// Save with lossless PNG compression
const outputPath = path.join(__dirname, 'date_30.01.2026.png');
const buffer = canvas.toBuffer('image/png', { compressionLevel: 6 });
fs.writeFileSync(outputPath, buffer);

console.log(`✅ Image generated: ${outputPath}`);
console.log(`📏 Dimensions: ${width}x${height}`);
console.log(`🎨 Style: White background with embossed gray text`);