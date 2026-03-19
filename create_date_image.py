from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

# Create image with similar dimensions (based on the uploaded image)
width, height = 400, 150
bg_color = (245, 245, 245)  # Light gray background

# Create base image
img = Image.new('RGB', (width, height), bg_color)
draw = ImageDraw.Draw(img)

# Try to load a bold font, fallback to default if not available
try:
    # Try common system fonts
    font_paths = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/usr/share/fonts/truetype/freefont/FreeSansBold.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "C:/Windows/Fonts/arialbd.ttf"
    ]
    font = None
    for path in font_paths:
        if os.path.exists(path):
            font = ImageFont.truetype(path, 72)
            break
    if font is None:
        font = ImageFont.load_default()
except:
    font = ImageFont.load_default()

# The new date text
text = "30.01.2026"

# Get text bounding box for centering
bbox = draw.textbbox((0, 0), text, font=font)
text_width = bbox[2] - bbox[0]
text_height = bbox[3] - bbox[1]

x = (width - text_width) // 2
y = (height - text_height) // 2 - 10

# Create embossed effect
# Shadow (offset down-right)
shadow_color = (180, 180, 180)  # Darker gray for shadow
shadow_offset = 3
draw.text((x + shadow_offset, y + shadow_offset), text, font=font, fill=shadow_color)

# Highlight (offset up-left)
highlight_color = (255, 255, 255)  # White for highlight
highlight_offset = 2
draw.text((x - highlight_offset, y - highlight_offset), text, font=font, fill=highlight_color)

# Main text (middle gray)
main_color = (140, 140, 140)  # Medium gray
draw.text((x, y), text, font=font, fill=main_color)

# Add slight blur to match the soft appearance
img = img.filter(ImageFilter.GaussianBlur(radius=0.3))

# Save the image
output_path = "/workspace/6995fed7-bbea-4273-9cb0-04a70d5daeb4/sessions/agent_ecc1c231-97b7-4e5a-ba47-f66e41c0af8c/date_30.01.2026.png"
img.save(output_path, "PNG")

print(f"Image saved to: {output_path}")
print(f"Dimensions: {img.size}")

# Display the image
img
