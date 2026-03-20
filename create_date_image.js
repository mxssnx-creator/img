const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create canvas matching original dimensions
const width = 400;
const height = 150;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Fill background with very light gray (matching original)
ctx.fillStyle = '#f0f0f0';
ctx.fillRect(0, 0, width, height);

// Text settings - match original style
const text = '30.01.2026';
ctx.font = 'bold 64px Arial, Helvetica, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

const x = width / 2;
const y = height / 2;

// Engraved/embossed effect matching original
// Bottom-right shadow (darker)
ctx.fillStyle = '#b0b0b0';
ctx.fillText(text, x + 1, y + 1);

// Top-left highlight (lighter)
ctx.fillStyle = '#ffffff';
ctx.fillText(text, x - 1, y - 1);

// Main text (medium gray - main color)
ctx.fillStyle = '#999999';
ctx.fillText(text, x, y);

// Save the image
const outputPath = path.join(__dirname, 'date_30.01.2026.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputPath, buffer);

console.log(`Image saved to: ${outputPath}`);
console.log(`Dimensions: ${width}x${height}`);
