#!/usr/bin/env python3
"""Generate missing favicon variants (icon-512 + circular) from the OFFICIAL QFS logo."""
from PIL import Image, ImageDraw
import os

SRC = "/home/z/my-project/public/qfs-logo.png"
OUT_DIR = "/home/z/my-project/public"

if not os.path.exists(SRC):
    raise SystemExit(f"Source logo not found: {SRC}")

img = Image.open(SRC).convert("RGBA")
print(f"Source: {img.size[0]}x{img.size[1]} RGBA")

# Generate icon-512 (PWA / OG image)
out = img.resize((512, 512), Image.LANCZOS)
out.save(os.path.join(OUT_DIR, "icon-512.png"), "PNG", optimize=True)
print("OK icon-512.png (512x512)")

# Generate circular version (for avatars)
mask = Image.new("L", img.size, 0)
draw = ImageDraw.Draw(mask)
draw.ellipse((0, 0, img.size[0], img.size[1]), fill=255)
circular = Image.new("RGBA", img.size, (0, 0, 0, 0))
circular.paste(img, (0, 0), mask)
circular.save(os.path.join(OUT_DIR, "qfs-logo-circle.png"), "PNG", optimize=True)
print("OK qfs-logo-circle.png (circular)")

print("\nDone. Official logo is the new master.")
