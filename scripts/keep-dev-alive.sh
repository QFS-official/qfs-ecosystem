#!/bin/bash
# Wrapper que mantiene el dev server vivo
cd /home/z/my-project
while true; do
  echo "[$(date)] Starting dev server..."
  ./node_modules/.bin/next dev -p 3000 >> dev.log 2>&1
  echo "[$(date)] Dev server exited, restarting in 3s..."
  sleep 3
done
