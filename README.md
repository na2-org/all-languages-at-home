# Alle Talen Thuis Prototype

## Share With GitHub Pages

GitHub Pages can host the app as a static website. The shared web version supports:

- typing a word
- picking an emoji
- opening the result popup
- playing pronunciation with the browser's built-in voices

The Whisper voice input uses the local Python backend, so it only works when running the prototype on your own computer.

To publish:

1. Create a new GitHub repository.
2. Upload these files from this folder:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `.nojekyll`
3. In GitHub, open `Settings` > `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Choose the `main` branch and `/root`, then save.

GitHub will give you a public URL after the first deployment finishes.

## Run With Whisper

Install once:

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
```

This prototype records WAV audio in the browser, so `ffmpeg` is not required for the local Whisper flow.

Start the Whisper backend:

```bash
.venv/bin/python whisper_server.py
```

Then start a local static server:

```bash
python3 -m http.server 4173
```

The app sends short microphone recordings to:

```text
http://localhost:8787/transcribe
```

Open the app from:

```text
http://localhost:4173
```

Use the `localhost` page for microphone recording. The `file://` page is less reliable for browser microphone permissions and local network requests.

## Generate Unicode Emoji Catalog

The visual picker can be generated from Unicode emoji data.

```bash
python3 tools_generate_unicode_catalog.py
```

The script saves the raw Unicode file at:

```text
unicode/emoji-test.txt
```

and writes the app-ready catalog to:

```text
emoji_catalog.js
```
