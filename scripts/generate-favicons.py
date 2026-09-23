#!/usr/bin/env python3
"""Generate favicon variants from the master QFS logo."""
from PIL import Image, ImageDraw
import os

SRC = "/home/z/my-project/public/qfs-logo.png"
OUT_DIR = "/home/z/my-project/public"

if not os.path.exists(SRC):
    raise SystemExit(f"Source logo not found: {SRC}")

img = Image.open(SRC).convert("RGBA")

variants = [
    ("favicon-16.png", 16),
    ("favicon-32.png", 32),
    ("icon-48.png", 48),
    ("icon-96.png", 96),
    ("icon-192.png", 192),
    ("icon-512.png", 512),
    ("apple-touch-icon.png", 180),
]

for name, size in variants:
    out = img.resize((size, size), Image.LANCZOS)
    out.save(os.path.join(OUT_DIR, name), "PNG", optimize=True)
    print(f"OK {name} ({size}x{size})")

# Multi-size ICO
ico_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
ico_images = [img.resize(s, Image.LANCZOS) for s in ico_sizes]
ico_images[0].save(
    os.path.join(OUT_DIR, "favicon.ico"),
    format="ICO",
    sizes=ico_sizes,
    append_images=ico_images[1:],
)
print("OK favicon.ico (multi-size)")

# Circular version
mask = Image.new("L", img.size, 0)
draw = ImageDraw.Draw(mask)
draw.ellipse((0, 0, img.size[0], img.size[1]), fill=255)
circular = Image.new("RGBA", img.size, (0, 0, 0, 0))
circular.paste(img, (0, 0), mask)
circular.save(os.path.join(OUT_DIR, "qfs-logo-circle.png"), "PNG", optimize=True)
print("OK qfs-logo-circle.png")

print("\nAll favicon variants generated.")
