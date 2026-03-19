const { createCanvas, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create canvas with similar dimensions
const width = 400;
const height = 150;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Fill background with light gray
ctx.fillStyle = '#f5f5f5';
ctx.fillRect(0, 0, width, height);

// Text settings
const text = '30.01.2026';
ctx.font = 'bold 72px Arial, sans-serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

const x = width / 2;
const y = height / 2;
const offset = 2;

// Draw shadow (down-right)
ctx.fillStyle = '#a0a0a0';
ctx.fillText(text, x + offset, y + offset);

// Draw highlight (up-left)
ctx.fillStyle = '#ffffff';
ctx.fillText(text, x - offset, y - offset);

// Draw main text (middle gray)
ctx.fillStyle = '#808080';
ctx.fillText(text, x, y);

// Save the image
const outputPath = path.join(__dirname, 'date_30.01.2026.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputPath, buffer);

console.log(`Image saved to: ${outputPath}`);
console.log(`Dimensions: ${width}x${height}`);
