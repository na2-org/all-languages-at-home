#!/usr/bin/env python3
import json
import re
from pathlib import Path
from urllib.request import urlopen


SOURCE_URL = "https://www.unicode.org/Public/17.0.0/emoji/emoji-test.txt"
SOURCE_FILE = Path(__file__).with_name("unicode") / "emoji-test.txt"
OUTPUT = Path(__file__).with_name("emoji_catalog.js")

GROUPS = {
    "Animals & Nature": "Nature",
    "Food & Drink": "Food and Drink",
    "Activities": "Activity",
    "Travel & Places": "Travel and Places",
    "Objects": "Objects",
}


def key_from_name(name):
    key = re.sub(r"[^a-z0-9]+", "_", name.lower()).strip("_")
    return f"unicode_{key}"


def make_entry(emoji, name, group):
    key = key_from_name(name)
    label = name.replace(":", "")
    return key, {
        "emoji": emoji,
        "category": GROUPS[group],
        "aliases": [label],
        "detected": {"word": label, "language": "English"},
        "translations": {
            "nl": {"word": label, "phonetic": label},
            "ru": {"word": label, "phonetic": label},
            "zh": {"word": label, "phonetic": label},
            "en": {"word": label, "phonetic": label},
            "ja": {"word": label, "phonetic": label},
        },
        "facts": [
            f"This emoji represents {label}.",
            "It comes from the Unicode emoji set.",
            "You can use it as a visual word input.",
        ],
        "art": key,
    }


def main():
    SOURCE_FILE.parent.mkdir(exist_ok=True)
    if SOURCE_FILE.exists() and SOURCE_FILE.stat().st_size > 0:
        data = SOURCE_FILE.read_text(encoding="utf-8")
        source = str(SOURCE_FILE)
    else:
        with urlopen(SOURCE_URL, timeout=30) as response:
            data = response.read().decode("utf-8")
        SOURCE_FILE.write_text(data, encoding="utf-8")
        source = SOURCE_URL

    current_group = None
    words = {}
    categories = {display_name: [] for display_name in GROUPS.values()}

    for line in data.splitlines():
        if line.startswith("# group: "):
            current_group = line[len("# group: ") :].strip()
            continue
        if current_group not in GROUPS:
            continue
        if "; fully-qualified" not in line:
            continue
        match = re.search(r"#\s+(\S+)\s+E[0-9.]+\s+(.+)$", line)
        if not match:
            continue
        emoji, name = match.groups()
        if "skin tone" in name or "flag:" in name:
            continue
        key, entry = make_entry(emoji, name, current_group)
        words[key] = entry
        categories[GROUPS[current_group]].append(key)

    payload = {
        "source": source,
        "words": words,
        "categories": [
            {
                "id": "unicode-" + re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-"),
                "name": name,
                "words": keys,
            }
            for name, keys in categories.items()
        ],
    }

    OUTPUT.write_text(
        "window.unicodeEmojiCatalog = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {OUTPUT}")
    print(f"Raw Unicode source: {SOURCE_FILE}")
    print(f"Emoji words: {len(words)}")
    for category in payload["categories"]:
        print(f"{category['name']}: {len(category['words'])}")


if __name__ == "__main__":
    main()
