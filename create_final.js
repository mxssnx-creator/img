const { createCanvas } = require('canvas');
const fs = require('fs');

// Based on the original image appearance
const width = 400;
const height = 150;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Background - light gray/white
ctx.fillStyle = '#f5f5f5';
ctx.fillRect(0, 0, width, height);

const text = '30.01.2026';
const fontSize = 80;

// Use bold sans-serif font
ctx.font = `bold ${fontSize}px Arial, Helvetica, sans-serif`;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

const x = width / 2;
const y = height / 2;

// Multi-layer embossed effect to match original

// Bottom-right shadow (darker)
ctx.fillStyle = '#999999';
ctx.fillText(text, x + 3, y + 3);

// Top-left highlight (lighter)
ctx.fillStyle = '#ffffff';
ctx.fillText(text, x - 2, y - 2);

// Main text layer (medium gray)
ctx.fillStyle = '#888888';
ctx.fillText(text, x, y);

// Save PNG
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('/workspace/6995fed7-bbea-4273-9cb0-04a70d5daeb4/sessions/agent_ecc1c231-97b7-4e5a-ba47-f66e41c0af8c/date_30.01.2026_final.png', buffer);

console.log('Image created: 400x150 pixels');
