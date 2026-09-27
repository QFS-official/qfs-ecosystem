#!/bin/bash
# Optimizar nuevo video y generar poster
set -e
cd /home/z/my-project/public

echo "=== Optimizar video (H.264, faststart, sin audio, bitrate optimizado) ==="
ffmpeg -y -i hero-portada-video-new.mp4 \
  -movflags +faststart \
  -c:v libx264 -profile:v high -level 4.0 \
  -preset slow -crf 26 \
  -pix_fmt yuv420p \
  -an \
  -vf "scale=848:-2" \
  hero-portada-video-web-new.mp4 2>&1 | tail -3

echo ""
echo "=== Extraer poster (frame en segundo 2) ==="
ffmpeg -y -i hero-portada-video-new.mp4 \
  -vframes 1 \
  -q:v 2 \
  -ss 00:00:02 \
  -update 1 \
  hero-portada-poster-new.jpg 2>&1 | tail -3

echo ""
echo "=== Reemplazar archivos actuales ==="
mv -f hero-portada-video-web-new.mp4 hero-portada-video-web.mp4
mv -f hero-portada-poster-new.jpg hero-portada-poster.jpg
rm hero-portada-video-new.mp4

echo ""
echo "=== Verificar archivos finales ==="
ls -la hero-portada-video-web.mp4 hero-portada-poster.jpg
file hero-portada-video-web.mp4 hero-portada-poster.jpg
