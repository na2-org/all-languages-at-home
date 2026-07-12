#!/bin/zsh
cd "/Users/ningxu/Documents/alle talen thuis" || exit 1
echo "Starting Alle Talen Thuis at http://localhost:4173"
echo "Keep this window open while testing the app."
python3 -m http.server 4173 --bind 127.0.0.1
