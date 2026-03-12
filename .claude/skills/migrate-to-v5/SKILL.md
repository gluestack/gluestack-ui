---
name: migrate-to-v5
description: Migrate a gluestack-ui project from v2, v3, or v4 to v5 (NativeWind v5 or UniWind). Covers automated CLI upgrade and manual step-by-step migration for all source versions.
---

# Migrate to gluestack-ui v5

This skill migrates any gluestack-ui project to v5, regardless of the starting version. gluestack-ui v5 runs on **Tailwind CSS v4** (CSS-first, no `tailwind.config.js`) with two supported styling engines:

| Engine | Tailwind | Platforms | When to choose |
|---|---|---|---|
| **NativeWind v5** | v4 | Expo, RN CLI, Next.js* | Recommended default |
| **UniWind** | v4 | Expo only | No PostCSS build step, simpler Expo setup |

> *Next.js support is pending NativeWind v5 web support. Use NativeWind v4 for Next.js for now.

---

## Step 0: Detect Your Current Version

Run in the project root:

```bash
npx gluestack-ui@alpha upgrade
```

The CLI detects your version automatically. To check manually, inspect `package.json`:

| Dependency present | Version |
|---|---|
| `@gluestack-ui/themed` or `@gluestack-ui/config` | **v2** |
| `@gluestack-ui/core` major = 3, or `@gluestack-ui/nativewind-utils` | **v3** |
| `@gluestack-ui/core` major ≥ 4 + no `uniwind` | **v4 (NativeWind)** |
| `@gluestack-ui/core` major ≥ 4 + `uniwind` present | **v4 (UniWind)** — already on v5 |

---

## Automated Migration (Recommended)

The CLI handles all file changes automatically:

```bash
# Commit your work first (strongly recommended)
git add -A && git commit -m "chore: before gluestack-ui v5 upgrade"

# Run the upgrade wizard
npx gluestack-ui@alpha upgrade
```

The wizard detects your version, walks through each upgrade step with prompts, and handles:
- Package installs / removals
- `global.css` rewrite
- `metro.config.js` updates
- `babel.config.js` updates
- `tailwind.config.js` migration prompts
- `postcss.config.js` creation (NativeWind v5)
- `lightningcss` pinning (NativeWind v5)
- Type definition files

> **Next.js projects**: The automated CLI does not support Next.js upgrades yet. Follow the manual path below.

---

## Migration Paths

### v4 (NativeWind) → v5

Choose your target engine when prompted (or follow the manual steps below).

#### Option A: v4 NativeWind → NativeWind v5

**Packages**

```bash
# Remove NativeWind v4
npm uninstall nativewind
# or: yarn remove / pnpm remove / bun remove nativewind

# Install NativeWind v5 + react-native-css
npm install nativewind@^5.0.0-preview.2 react-native-css@^3.0.4

# Upgrade Tailwind to v4 (dev deps)
npm install -D tailwindcss@^4.2.0 @tailwindcss/postcss@^4.2.0 postcss@^8.5.0
```

**Pin lightningcss** (required — NativeWind v5 requires exactly 1.30.1):

```jsonc
// package.json
{
  "overrides": { "lightningcss": "1.30.1" },
  "resolutions": { "lightningcss": "1.30.1" }
}
```

**`global.css`** — replace contents with Tailwind v4 imports + CSS custom properties:

```css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css";
@import "nativewind/theme";

@layer theme {
  :root {
    --primary: 23 23 23;
    --primary-foreground: 250 250 250;
    --card: 255 255 255;
    --secondary: 245 245 245;
    --secondary-foreground: 23 23 23;
    --background: 255 255 255;
    --popover: 255 255 255;
    --popover-foreground: 10 10 10;
    --muted: 245 245 245;
    --muted-foreground: 115 115 115;
    --destructive: 231 0 11;
    --foreground: 10 10 10;
    --border: 229 229 229;
    --input: 229 229 229;
    --ring: 212 212 212;
    --accent: 247 247 247;
    --accent-foreground: 52 52 52;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --primary: 255 245 245;
      --primary-foreground: 23 23 23;
      --card: 23 23 23;
      --secondary: 38 38 38;
      --secondary-foreground: 250 250 250;
      --background: 10 10 10;
      --popover: 23 23 23;
      --popover-foreground: 250 250 250;
      --muted: 38 38 38;
      --muted-foreground: 161 161 161;
      --destructive: 255 100 103;
      --foreground: 250 250 250;
      --border: 46 46 46;
      --input: 46 46 46;
      --accent: 38 38 38;
      --accent-foreground: 250 250 250;
      --ring: 115 115 115;
    }
  }

  /* Web only: higher specificity (0,2,0) wins over media query (0,1,0) */
  :root.dark {
    --primary: 255 245 245;
    --primary-foreground: 23 23 23;
    --card: 23 23 23;
    --secondary: 38 38 38;
    --secondary-foreground: 250 250 250;
    --background: 10 10 10;
    --popover: 23 23 23;
    --popover-foreground: 250 250 250;
    --muted: 38 38 38;
    --muted-foreground: 161 161 161;
    --destructive: 255 100 103;
    --foreground: 250 250 250;
    --border: 46 46 46;
    --input: 46 46 46;
    --accent: 38 38 38;
    --accent-foreground: 250 250 250;
    --ring: 115 115 115;
  }

  :root.light {
    --primary: 23 23 23;
    --primary-foreground: 250 250 250;
    --card: 255 255 255;
    --secondary: 245 245 245;
    --secondary-foreground: 23 23 23;
    --background: 255 255 255;
    --popover: 255 255 255;
    --popover-foreground: 10 10 10;
    --muted: 245 245 245;
    --muted-foreground: 115 115 115;
    --destructive: 231 0 11;
    --foreground: 10 10 10;
    --border: 229 229 229;
    --input: 229 229 229;
    --ring: 212 212 212;
    --accent: 247 247 247;
    --accent-foreground: 52 52 52;
  }
}

@theme inline {
  --color-primary: rgb(var(--primary));
  --color-primary-foreground: rgb(var(--primary-foreground));
  --color-card: rgb(var(--card));
  --color-secondary: rgb(var(--secondary));
  --color-secondary-foreground: rgb(var(--secondary-foreground));
  --color-background: rgb(var(--background));
  --color-popover: rgb(var(--popover));
  --color-popover-foreground: rgb(var(--popover-foreground));
  --color-muted: rgb(var(--muted));
  --color-muted-foreground: rgb(var(--muted-foreground));
  --color-destructive: rgb(var(--destructive));
  --color-foreground: rgb(var(--foreground));
  --color-border: rgb(var(--border));
  --color-input: rgb(var(--input));
  --color-ring: rgb(var(--ring));
  --color-accent: rgb(var(--accent));
  --color-accent-foreground: rgb(var(--accent-foreground));
}
```

**`postcss.config.js`** — create at project root:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

**`metro.config.js`** — ensure `nativewind/metro` is present:

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
module.exports = withNativewind(config);
```

**`tailwind.config.js`** — Tailwind v4 is CSS-first. This file is no longer needed.
- Migrate any custom `fontFamily`, `boxShadow`, `safelist`, `fontSize`, etc. to `global.css` using `@theme {}` or `@layer utilities {}`
- See: https://tailwindcss.com/docs/upgrade-guide
- Delete the file once migrated

**`react-native-css-env.d.ts`** — create at project root:

```ts
/// <reference types="react-native-css/types" />

// NOTE: This file is generated by react-native-css and it should not be edited manually.
```

**`babel.config.js`** — remove the `tailwind.config` alias if present:

```js
// Remove this line if present:
// 'tailwind.config': './tailwind.config.js'
```

**Re-add components** to get NativeWind v5 versions:

```bash
npx gluestack-ui@alpha add gluestack-ui-provider
npx gluestack-ui@alpha add --all
# or add components individually
```

**Native rebuild** (bare Expo or RN CLI only):

```bash
# iOS
cd ios && pod install && npx expo run:ios
# Android
npx expo run:android
```

---

#### Option B: v4 NativeWind → UniWind

UniWind requires an **Expo** project. Next.js and RN CLI support is coming soon.

**Packages**

```bash
# Remove NativeWind
npm uninstall nativewind
# or: yarn remove / pnpm remove / bun remove nativewind

# Install UniWind + updated gluestack packages
npm install uniwind@^1.3.0 @gluestack-ui/core@^4.1.0-alpha.0 @gluestack-ui/utils@^4.1.0-alpha.0

# Upgrade Tailwind to v4 (dev dep)
npm install -D tailwindcss@^4.1.18
```

**`metro.config.js`** — switch from NativeWind to UniWind:

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withUniwindConfig } = require("uniwind/metro");

const config = getDefaultConfig(__dirname);
module.exports = withUniwindConfig(config, {
  cssEntryFile: './global.css',
  dtsFile: './uniwind-types.d.ts',
  extraThemes: ['dark'],
});
```

**`global.css`** — replace with UniWind CSS (Tailwind v4 + `:where()` selectors):

```css
@import 'tailwindcss';
@import 'uniwind';

@layer theme {
  :where(.light, .light *) {
    --primary: 23 23 23;
    --primary-foreground: 250 250 250;
    --card: 255 255 255;
    --secondary: 245 245 245;
    --secondary-foreground: 23 23 23;
    --background: 255 255 255;
    --popover: 255 255 255;
    --popover-foreground: 10 10 10;
    --muted: 245 245 245;
    --muted-foreground: 115 115 115;
    --destructive: 231 0 11;
    --foreground: 10 10 10;
    --border: 229 229 229;
    --input: 229 229 229;
    --ring: 212 212 212;
    --accent: 247 247 247;
    --accent-foreground: 52 52 52;
  }

  @media (prefers-color-scheme: light) {
    :root:not(:where(.light, .light *, .dark, .dark *)) {
      --primary: 23 23 23;
      --primary-foreground: 250 250 250;
      --card: 255 255 255;
      --secondary: 245 245 245;
      --secondary-foreground: 23 23 23;
      --background: 255 255 255;
      --popover: 255 255 255;
      --popover-foreground: 10 10 10;
      --muted: 245 245 245;
      --muted-foreground: 115 115 115;
      --destructive: 231 0 11;
      --foreground: 10 10 10;
      --border: 229 229 229;
      --input: 229 229 229;
      --ring: 212 212 212;
      --accent: 247 247 247;
      --accent-foreground: 52 52 52;
    }
  }

  :where(.dark, .dark *) {
    --primary: 255 245 245;
    --primary-foreground: 23 23 23;
    --card: 23 23 23;
    --secondary: 38 38 38;
    --secondary-foreground: 250 250 250;
    --background: 10 10 10;
    --popover: 23 23 23;
    --popover-foreground: 250 250 250;
    --muted: 38 38 38;
    --muted-foreground: 161 161 161;
    --destructive: 255 100 103;
    --foreground: 250 250 250;
    --border: 46 46 46;
    --input: 46 46 46;
    --accent: 38 38 38;
    --accent-foreground: 250 250 250;
    --ring: 115 115 115;
  }

  @media (prefers-color-scheme: dark) {
    :root:not(:where(.light, .light *, .dark, .dark *)) {
      --primary: 255 245 245;
      --primary-foreground: 23 23 23;
      --card: 23 23 23;
      --secondary: 38 38 38;
      --secondary-foreground: 250 250 250;
      --background: 10 10 10;
      --popover: 23 23 23;
      --popover-foreground: 250 250 250;
      --muted: 38 38 38;
      --muted-foreground: 161 161 161;
      --destructive: 255 100 103;
      --foreground: 250 250 250;
      --border: 46 46 46;
      --input: 46 46 46;
      --accent: 38 38 38;
      --accent-foreground: 250 250 250;
      --ring: 115 115 115;
    }
  }
}

@theme inline {
  --color-primary: rgb(var(--primary));
  --color-primary-foreground: rgb(var(--primary-foreground));
  --color-card: rgb(var(--card));
  --color-secondary: rgb(var(--secondary));
  --color-secondary-foreground: rgb(var(--secondary-foreground));
  --color-background: rgb(var(--background));
  --color-popover: rgb(var(--popover));
  --color-popover-foreground: rgb(var(--popover-foreground));
  --color-muted: rgb(var(--muted));
  --color-muted-foreground: rgb(var(--muted-foreground));
  --color-destructive: rgb(var(--destructive));
  --color-foreground: rgb(var(--foreground));
  --color-border: rgb(var(--border));
  --color-input: rgb(var(--input));
  --color-ring: rgb(var(--ring));
  --color-accent: rgb(var(--accent));
  --color-accent-foreground: rgb(var(--accent-foreground));
}
```

> **Web theming note**: UniWind's CSS visitor transforms `:where(.dark, .dark *)` to `.dark {}`.
> For this to work on Expo Web, the `.dark {}` / `.light {}` selectors **must be at the top level** of `@layer theme` — never nested inside `:root {}`.
> The template above is already correct.

**`tailwind.config.js`** — delete it. Tailwind v4 is CSS-first; all tokens live in `global.css`.

**`nativewind-env.d.ts`** → delete. Create `uniwind-types.d.ts` instead:

```ts
/// <reference types="uniwind/types" />

declare module 'uniwind' {
  export interface UniwindConfig {
    themes: readonly ['light', 'dark']
  }
}

export {}
```

**`babel.config.js`** — remove `nativewind/babel` preset/plugin, add `react-native-worklets/plugin`:

```js
module.exports = {
  presets: [
    // Remove: 'nativewind/babel'
    ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
  ],
  plugins: [
    'react-native-worklets/plugin',
  ],
};
```

**`GluestackUIProvider`** — re-add to get the UniWind version:

```bash
npx gluestack-ui@alpha add gluestack-ui-provider
```

Key differences in the UniWind provider:
- Native: use `Uniwind.setTheme('light' | 'dark' | 'system')` instead of `Appearance.setColorScheme()`
- Web: `script.ts` adds `.dark` / `.light` class to `document.documentElement`; `Uniwind.setTheme()` also calls `onThemeChange()` for runtime CSS variable management

---

### v3 → v5

**Step 1: Upgrade v3 → v4 (NativeWind)**

```bash
# Detect old packages (check package.json for @gluestack-ui/* deps)
# Remove all old gluestack packages
npm uninstall @gluestack-ui/core @gluestack-ui/utils @gluestack-ui/nativewind-utils \
  @gluestack-ui/themed @gluestack-ui/config @gluestack/ui-next-adapter

# Install gluestack v4 + NativeWind v4
npm install @gluestack-ui/core@^4.0.0-alpha.0 @gluestack-ui/utils@^4.0.0-alpha.0 \
  tailwind-variants@^0.1.20 nativewind@^4.1.23

# Expo: use expo install for native packages (resolves SDK-compatible versions)
npx expo install react-native-reanimated @legendapp/motion react-native-svg \
  react-native-safe-area-context @expo/html-elements
npx expo install --fix   # resolves react-native-worklets at matching version

# RN CLI / non-Expo:
npm install react-native-reanimated@~4.2.1 react-native-worklets@~0.7.1 \
  @legendapp/motion@^2.4.0 react-native-svg@^15.12.0 \
  react-native-safe-area-context@^5.6.1 @expo/html-elements@^0.12.5
```

**`tailwind.config.js`** — remove `gluestackPlugin`:

```js
// Remove this import:
// import gluestackPlugin from '@gluestack-ui/nativewind-utils/tailwind-plugin';

// Remove from plugins array:
// plugins: [gluestackPlugin]
```

**`babel.config.js`** — add `react-native-worklets/plugin`:

```js
plugins: [
  'react-native-worklets/plugin',
]
```

**Import updates** — imports are compatible between v3 and v4 (same format). No changes needed.

**Native rebuild** (bare Expo / RN CLI):

```bash
# iOS
cd ios && pod install && npx expo run:ios
# Android
npx expo run:android
```

**Step 2: v4 NativeWind → v5**

Follow [Option A](#option-a-v4-nativewind--nativewind-v5) or [Option B](#option-b-v4-nativewind--uniwind) above.

---

### v2 → v5

**Step 1: Upgrade v2 → v3**

```bash
# Remove all old v2 packages
npm uninstall @gluestack-ui/themed @gluestack-ui/config \
  @gluestack-style @gluestack-style/react @gluestack/ui-next-adapter

# Install v3 core packages
npm install @gluestack-ui/core@3.0.10 @gluestack-ui/utils@3.0.11 react-native-svg@15.13.0

# Next.js only:
npm install @gluestack/ui-next-adapter@3.0.3
```

**`tailwind.config.js`** — remove old gluestack plugin (same as v3→v4 step above).

**`app/registry.tsx`** (Next.js only) — update flush import:

```ts
// Old:
import { flush } from '@gluestack-ui/nativewind-utils/flush';
// New:
import { flush } from '@gluestack-ui/utils/nativewind-utils';
```

**`next.config.js/ts/mjs`** (Next.js only) — update adapter import (same package, just re-save to refresh):

```ts
import { withGluestackUI } from "@gluestack/ui-next-adapter";
```

**Import updates** — update component imports across `components/ui/`:

```ts
// Old (v2):
import { createButton } from '@gluestack-ui/button';
// New (v3):
import { createButton } from '@gluestack-ui/core/button/creator';

// Old (v2 utils):
import { something } from '@gluestack-ui/nativewind-utils/something';
// New (v3):
import { something } from '@gluestack-ui/utils/nativewind-utils';
```

**Step 2: v3 → v4 → v5**

Follow the [v3 → v5](#v3--v5) path above.

---

## What Changes in v5 (Summary)

| What | v4 (NativeWind) | v5 NativeWind | v5 UniWind |
|---|---|---|---|
| Tailwind version | v3 | **v4** | **v4** |
| `tailwind.config.js` | Required | **Deleted** (CSS-first) | **Deleted** |
| `global.css` imports | `@tailwind base/components/utilities` | `@import "tailwindcss/..."` | `@import 'tailwindcss'; @import 'uniwind'` |
| Theme tokens | `tailwind.config.js theme.extend.colors` | `global.css @layer theme { :root {} }` | `global.css @layer theme { :where(.light) {} }` |
| `postcss.config.js` | Required | **Required** | Not needed |
| `lightningcss` pin | Not needed | **`1.30.1` required** | Not needed |
| Package | `nativewind@^4` | `nativewind@^5.0.0-preview.2` + `react-native-css@^3.0.4` | `uniwind@^1.3.0` |
| Platform support | Expo + RN CLI + Next.js | Expo + RN CLI (Next.js pending) | **Expo only** |
| Metro config | `withNativeWind(config)` | `withNativewind(config)` | `withUniwindConfig(config, {...})` |
| Theme switching | `Appearance.setColorScheme()` | `Appearance.setColorScheme()` | `Uniwind.setTheme()` |

---

## Common Issues

### `Mismatch between JavaScript part and native part of Worklets`

`react-native-worklets` version must match the minor of `react-native-reanimated`. For Expo projects, always use `npx expo install react-native-reanimated && npx expo install --fix` — never pin manually.

### Theme not applying on Expo Web (UniWind)

The `.dark {}` / `.light {}` selectors in `global.css` must be **top-level** inside `@layer theme`, not nested inside `:root {}`. Nesting causes UniWind's CSS visitor to emit `.dark {}` as a descendant of `:root`, so `html.dark` never matches.

### NativeWind v5 build errors

Ensure `lightningcss` is pinned to exactly `1.30.1` in both `overrides` and `resolutions` in `package.json`, then delete `node_modules` and reinstall.

### `tailwind.config.js` still referenced

After deleting `tailwind.config.js`, remove any `'tailwind.config': './tailwind.config.js'` alias from `babel.config.js` presets options.

### `nativewind/babel` still in babel.config.js (UniWind)

UniWind does not use the NativeWind Babel preset. Remove `'nativewind/babel'` from both `presets` and `plugins` arrays.

---

## After Migration Checklist

- [ ] `lightningcss` pinned to `1.30.1` (NativeWind v5 only)
- [ ] `global.css` uses Tailwind v4 imports (no `@tailwind base/components/utilities`)
- [ ] `tailwind.config.js` deleted and custom tokens moved to `global.css @theme {}`
- [ ] `postcss.config.js` created with `@tailwindcss/postcss` (NativeWind v5 only)
- [ ] `metro.config.js` updated to correct wrapper (`withNativewind` or `withUniwindConfig`)
- [ ] `babel.config.js` — `nativewind/babel` removed (UniWind); `react-native-worklets/plugin` added
- [ ] `GluestackUIProvider` re-added: `npx gluestack-ui@alpha add gluestack-ui-provider`
- [ ] All components re-added: `npx gluestack-ui@alpha add --all`
- [ ] Native rebuild done (bare Expo / RN CLI): `pod install` + `expo run:ios`
- [ ] App starts without errors on iOS, Android, and Web
- [ ] Light/dark mode toggles correctly on all platforms
