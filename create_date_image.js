const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function createDateImage() {
    // Load original image to match exact style
    const originalPath = path.join(__dirname, 'original_date.jpg');
    
    // Create canvas
    const width = 400;
    const height = 150;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    
    // White background (exactly like original)
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    
    // New date text
    const text = '30.01.2026';
    
    // Font settings to match original exactly
    ctx.font = '600 56px Arial, Helvetica, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const x = width / 2;
    const y = height / 2 + 2;
    
    // Multi-layer embossed effect matching original image
    // Layer 1: Shadow (bottom-right, darker gray)
    ctx.fillStyle = '#c0c0c0';
    ctx.fillText(text, x + 2, y + 2);
    
    // Layer 2: Deeper shadow for depth
    ctx.fillStyle = '#d0d0d0';
    ctx.fillText(text, x + 1, y + 1);
    
    // Layer 3: Highlight (top-left, white)
    ctx.fillStyle = '#ffffff';
    ctx.fillText(text, x - 1, y - 1);
    
    // Layer 4: Main text (medium gray matching original)
    ctx.fillStyle = '#a0a0a0';
    ctx.fillText(text, x, y);
    
    // Save the image
    const outputPath = path.join(__dirname, 'date_30.01.2026.png');
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);
    
    console.log(`Image saved to: ${outputPath}`);
    console.log(`Dimensions: ${width}x${height}`);
}

createDateImage().catch(console.error);