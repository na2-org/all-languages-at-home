# Unicode Emoji Source

Put the raw Unicode emoji data file here:

```text
emoji-test.txt
```

The generator uses this local file when present. If it is missing, the generator tries to download it from:

```text
https://www.unicode.org/Public/17.0.0/emoji/emoji-test.txt
```

Run:

```bash
python3 tools_generate_unicode_catalog.py
```
