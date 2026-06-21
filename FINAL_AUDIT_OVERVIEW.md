# Final Diff-Style Overview: Full Japanese Romaji Migration

**Date:** 2026-05-30  
**Scope:** Complete systematic audit and correction of all dynamic emoji categories (Food, Nature, Activities, People, Objects, Travel/Places + partial Animals reference).

---

## Executive Summary

This document provides a high-level "diff-style" view of the architectural change performed across the entire project.

### Before (Initial State)
- Most entries in the 6 main emoji arrays used **7-element structures**:
  `[emoji, english, dutch, chinese, russian, japanese, subgroup]`
- Japanese pronunciation was generated at runtime via `pronunciationGuide("ja", japanese)`.
- This led to frequent broken/mangled output for kanji compounds and descriptive phrases (e.g. "i", "ku", "ru", "no-cha-n", "sa-u-na-ni-ru", raw kanji leakage like "競馬", "人魚", "卒業帽").
- Audio (Google TTS) often worked correctly while display did not.

### After (Current State)
- All entries now use **8-element structures** with an explicit authoritative romaji field:
  `[emoji, english, dutch, chinese, russian, japanese, subgroup, romaji]`
- Processing logic updated to prefer the explicit field:
  `phonetic: romaji || pronunciationGuide("ja", japanese)`
- `japanesePronunciationOverrides` massively expanded as a safety net.
- Every category now has consistent, maintainable, human-curated romaji.

---

## High-Level Structural Diff

```diff
- const foodEmojiItems = [
-   ["🍇", "grapes", ..., "ぶどう"],           // 7 elements
+   ["🍇", "grapes", ..., "ぶどう", "budō"],   // 8 elements

- const objectEmojiItems = [ ... "clothing" ];   // hundreds of 7-element entries
+ const objectEmojiItems = [ ... "clothing", "megane" ]; // explicit romaji

- ja: { word: japanese, phonetic: pronunciationGuide("ja", japanese) }
+ ja: { word: japanese, phonetic: romaji || pronunciationGuide("ja", japanese) }
```

**Key files changed:**
- `app.js` — data arrays + processing maps + overrides
- `PRONUNCIATION_FIXES.md` — living audit log + final summary tables

---

## Statistics (Approximate)

| Category              | Approx. Entries Fixed | Biggest Problem Areas                  |
|-----------------------|-----------------------|----------------------------------------|
| Food                  | ~80+                  | Kanji compounds (餃子, ご飯, etc.)     |
| Nature                | ~65+ (post-moon)      | Weather phrases with "と"              |
| Activities            | ~30+                  | Sport phrases ("する人", "する人たち") |
| People                | ~80+                  | Role descriptions + fantasy            |
| Objects (biggest)     | **150+**              | Clothing, tools, office, writing       |
| Travel/Places         | ~40+                  | Transport + place names                |
| **Total**             | **~450+ entries**     | —                                      |

---

## Most Common Failure Patterns (Final Table)

| # | Pattern                          | Example Japanese          | Before (Bad Output)     | After (Correct)              |
|---|----------------------------------|---------------------------|-------------------------|------------------------------|
| 1 | Pure kanji compounds             | 卒業帽, 競馬, 骨         | Raw kanji or "i"/"ku"   | sotsugyōbō, keiba, kotsu     |
| 2 | Phrases with の / に / する      | 手動車いすの人, サウナに入る人 | "no-cha-n", "sa-u-na-ni-ru" | shudō kuruma isu no hito, sauna ni iru hito |
| 3 | Katakana-only entries            | スキーヤー, キャップ     | Often broken or missing | sukīyā, kyappu               |
| 4 | Large untouched subsections      | Entire "clothing" block   | Almost all 7-field only | Full explicit romaji         |
| 5 | Late stragglers                  | person running, person getting haircut | Still 7 fields late in project | Fixed in final sweep         |

---

## Category-by-Category Status (Post-Sweep)

- **Food** — Complete
- **Nature** — Complete (including all weather/descriptive phrases)
- **Activities** — Complete
- **People** — Complete (roles + fantasy + activity + resting)
- **Objects** — Complete (clothing, tools, office, money, writing, computer, light & video, book-paper)
- **Travel/Places** — Complete
- **Processing logic** — Updated across all maps to prefer explicit romaji
- **Overrides** — Fully populated with every new phrase

---

## Remaining Recommendations (if any)

1. Future entries should always be added with the 8th romaji field from day one.
2. Consider adding a small helper script (or lint rule) that warns if a new entry is added without the 8th field.
3. English & Dutch phonetics could benefit from a similar explicit-field migration in a future pass (currently still rely more heavily on `latinPronunciationGuide`).

---

**This document serves as the authoritative "before vs after" record of the full project migration.**

All work was performed using the stronger full-audit prompt requested by the user.
