#!/bin/bash
# Extraer un frame del video como poster
set -e
cd /home/z/my-project/public

ffmpeg -y -i hero-portada-video.mp4 \
  -vframes 1 \
  -q:v 2 \
  -ss 00:00:01 \
  hero-portada-poster.jpg 2>&1 | tail -5

echo "---"
ls -la hero-portada-poster.jpg
file hero-portada-poster.jpg
