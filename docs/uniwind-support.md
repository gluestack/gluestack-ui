# UniWind Support — Architecture & Transform Reference

This document covers how gluestack-ui ships components for both **NativeWind v4** (Tailwind v3) and **UniWind** (Tailwind v4) from a single source tree.

---

## 1. Architecture Overview

`src/` is the single source of truth. Components are copied to target apps at build/dev time by **mappers**. The UniWind mapper rewrites the ~5% of code that is framework-specific; everything else copies verbatim.

```
src/components/ui/                          apps/starter-kit-expo-uniwind/
├── button/                                 └── components/ui/
│   └── index.tsx          ─── transform ──►    ├── button/
├── icon/                                   │   │   └── index.tsx   (cssInterop → withUniwind)
│   └── index.tsx          ─── transform ──►    ├── icon/
├── actionsheet/                            │   │   └── index.tsx   (cssInterop → withUniwind)
│   └── index.tsx          ─── transform ──►    ├── actionsheet/
├── gluestack-ui-provider/                  │   │   └── index.tsx   (cssInterop → withUniwind)
│   ├── index.tsx          ─── SKIP ──────► │   └── gluestack-ui-provider/
│   ├── config.ts          ─── SKIP ──────► │       ├── index.tsx   (renamed from .uniwind)
│   ├── index.uniwind.tsx  ─── RENAME ─────►│       └── config.ts   (renamed from .uniwind)
│   └── config.uniwind.ts  ─── RENAME ─────►│
└── box/                                    └── box/
    └── index.tsx          ─── COPY ────────►       └── index.tsx   (no cssInterop, verbatim)
```

**What stays the same across both engines:**
- All `tva()` variant style definitions
- All JSX, component logic, event handlers
- All `withStyleContext` / `useStyleContext` parent-child variant passing
- All exports and public APIs

**What changes:**
- `cssInterop(X, cfg)` calls → `withUniwind(X)` wrappers
- `import { cssInterop } from 'nativewind'` → `import { withUniwind } from 'uniwind'`
- The provider (theming API is fundamentally different)

---

## 2. Files Added & Modified

### New files in `src/` (provider variants)

| File | Purpose |
|---|---|
| `src/components/ui/gluestack-ui-provider/index.uniwind.tsx` | UniWind provider. Uses `Uniwind.setTheme()` instead of `useColorScheme()`. |
| `src/components/ui/gluestack-ui-provider/config.uniwind.ts` | Empty config stub. UniWind theming lives in `global.css`, not JS. |

### New app: `apps/starter-kit-expo-uniwind/`

| File | Purpose |
|---|---|
| `package.json` | Expo project config. Swaps `nativewind` → `uniwind`, `tailwindcss ^3` → `^4`. |
| `metro.config.js` | Uses `withUniwindConfig()` instead of `withNativeWind()`. |
| `babel.config.js` | Removes `nativewind/babel` preset and `react-native-worklets` plugin. |
| `global.css` | Theme variables via `@variant` + color mappings via `@theme inline`. |
| `tsconfig.json` | References `uniwind-types.d.ts` for className type support. |
| `app.json` | Expo app config. |
| `app/_layout.tsx` | Root layout wrapping with `GluestackUIProvider`. |
| `app/index.tsx` | Simple home screen. |

### New mapper: `scripts/mappers/starter-kit-expo-uniwind/`

| File | Purpose |
|---|---|
| `index.ts` | Mapper entry point. Exports `{ component, nonComponent }` interface. |
| `componentOperations.ts` | Per-component copy orchestration. Decides: copy, transform, or route provider files. |
| `transforms.ts` | AST-based rewriter (`getProviderFileAction` + `transformCssInteropToUniwind`). |

### Modified files

| File | Change |
|---|---|
| `scripts/mappers/index.ts` | Registered `starter-kit-expo-uniwind` mapper. |
| `package.json` (root) | Added `dev:starter-kit-expo-uniwind`, `sync:starter-kit-expo-uniwind`, `link:apps-starter-kit-expo-uniwind` scripts. |

---

## 3. Per-File Decision Flow

Every file in a component directory passes through this decision tree in `componentOperations.ts`:

```
  file in src/components/ui/<component>/
  │
  ├─ component === "gluestack-ui-provider" ?
  │   │
  │   ├─ index.tsx              →  SKIP   (nativewind provider)
  │   ├─ index.next.tsx         →  SKIP   (Next.js, not needed)
  │   ├─ index.web.tsx          →  SKIP   (web, not needed)
  │   ├─ config.ts              →  SKIP   (uses vars() from nativewind)
  │   ├─ index.uniwind.tsx      →  RENAME to index.tsx   ←── hand-written UniWind provider
  │   ├─ config.uniwind.ts      →  RENAME to config.ts   ←── empty stub
  │   └─ anything else          →  COPY as-is
  │
  ├─ file is .tsx or .ts  AND  contains cssInterop + 'nativewind' ?
  │   └─  RUN AST TRANSFORM  →  write transformed output
  │
  └─ otherwise
      └─  COPY verbatim  (dependencies.json is always excluded)
```

---

## 4. The Four cssInterop → withUniwind Transform Patterns

The AST transform in `transforms.ts` handles every shape of `cssInterop` call found across the component library. Each pattern below shows the exact source lines that change; everything else in the file is untouched.

### Pattern A — Imported identifier (e.g. `button/index.tsx`)

This is the most common case: a component imported from another package, then passed to `cssInterop`.

```
BEFORE (src)                                  AFTER (apps/starter-kit-expo-uniwind)
─────────────────────────────────────────     ─────────────────────────────────────────
import { PrimitiveIcon }                      import { PrimitiveIcon as _PrimitiveIcon }
  from '@gluestack-ui/core/icon/creator';       from '@gluestack-ui/core/icon/creator';

import { cssInterop } from 'nativewind';      import { withUniwind } from 'uniwind';

cssInterop(PrimitiveIcon, {                   const PrimitiveIcon = withUniwind(_PrimitiveIcon);
  className: {
    target: 'style',
    nativeStyleToProp: { height, width,
      fill, color, stroke },
  },
});
```

- Import specifier renamed: `PrimitiveIcon` → `PrimitiveIcon as _PrimitiveIcon`
- `cssInterop` call + its entire config argument replaced by a single `const` wrapper line
- All other references to `PrimitiveIcon` in the file remain unchanged

### Pattern B — Exported local declaration (e.g. `icon/index.tsx`)

The target is a `const` declared and exported in the same file. The `export` keyword must move to the wrapper line so the public API name stays the same.

```
BEFORE (src)                                  AFTER (apps/starter-kit-expo-uniwind)
─────────────────────────────────────────     ─────────────────────────────────────────
export const UIIcon = createIcon({            const _UIIcon = createIcon({
  Root: PrimitiveIcon,                          Root: PrimitiveIcon,
}) as React.ForwardRefExoticComponent<...>;   }) as React.ForwardRefExoticComponent<...>;

cssInterop(UIIcon, {                          export const UIIcon = withUniwind(_UIIcon);
  className: {
    target: 'style',
    nativeStyleToProp: { height, width,
      fill, color, stroke },
  },
});
```

- Declaration renamed: `export const UIIcon` → `const _UIIcon` (export stripped)
- `cssInterop` call replaced by `export const UIIcon = withUniwind(_UIIcon)` (export moved here)

### Pattern C — Compound component (e.g. `actionsheet/index.tsx`)

A compound component has `cssInterop` on both the root **and** its sub-components (`.Content`, `.Backdrop`, etc.). `withUniwind` returns a new component that loses sub-component properties, so an `Object.assign` re-attaches them individually wrapped.

```
BEFORE (src)                                  AFTER (apps/starter-kit-expo-uniwind)
─────────────────────────────────────────     ─────────────────────────────────────────
export const UIActionsheet =                  const _UIActionsheet =
  createActionsheet({ ... });                   createActionsheet({ ... });

cssInterop(UIActionsheet, {...});             export const UIActionsheet = Object.assign(
cssInterop(UIActionsheet.Content, {...});       withUniwind(_UIActionsheet),
cssInterop(UIActionsheet.ItemText, {...});      {
cssInterop(UIActionsheet.DragIndicator,{});       Content:         withUniwind(_UIActionsheet.Content),
cssInterop(UIActionsheet.Backdrop, {...});        ItemText:        withUniwind(_UIActionsheet.ItemText),
cssInterop(UIActionsheet.ScrollView, {...});      DragIndicator:   withUniwind(_UIActionsheet.DragIndicator),
// ... more sub-components                        Backdrop:        withUniwind(_UIActionsheet.Backdrop),
                                                  ScrollView:      withUniwind(_UIActionsheet.ScrollView),
                                                  // ... all sub-components
                                                }
                                              ) as typeof _UIActionsheet;
```

- All sub-component `cssInterop` calls are removed and merged into one `Object.assign` block
- `as typeof _UIActionsheet` preserves TypeScript's knowledge of `.Content`, `.Item`, etc.
- Any standalone targets in the same file (e.g. `ItemWrapper`, `PrimitiveIcon`) are handled independently via Pattern A or B

### Pattern D — Standalone member expression

A sub-component `cssInterop` call where the root has **no** matching `cssInterop` call. Rare, but handled as a direct reassignment.

```
BEFORE (src)                    AFTER (apps/starter-kit-expo-uniwind)
──────────────────────          ──────────────────────────────────────
cssInterop(Foo.Bar, {...});     Foo.Bar = withUniwind(Foo.Bar);
```

---

## 5. Why the `_` Prefix Naming

The core reason is the API shape difference:

```
cssInterop — mutates in place          withUniwind — HOC, returns new component
─────────────────────────────          ─────────────────────────────────────────
const X = create();                    const _X = create();        // original
cssInterop(X, config);                 const X = withUniwind(_X);  // wrapped
// X is now className-aware            // X is now className-aware
// same reference, same name           // NEW reference, needed a new name for original
```

`cssInterop` modifies the component it receives. `withUniwind` does not — it returns a brand-new component. To free up the original name (`X`) for the wrapped version (so the rest of the file needs zero changes), the original must be renamed. `_X` is the convention: internal, not part of the public API.

For compound components, `_X` is also needed at runtime to reach sub-components:

```
// This works — _UIActionsheet is the raw compound component
withUniwind(_UIActionsheet.Content)

// This would NOT work — UIActionsheet is already the HOC wrapper,
// it does not have .Content on it until Object.assign puts it there
withUniwind(UIActionsheet.Content)  ← undefined
```

---

## 6. Provider: Why Manual Variants Are Needed

The provider is the one component that **cannot** be auto-transformed. The theming APIs are fundamentally different in shape, not just syntax.

```
NativeWind theming                         UniWind theming
──────────────────                         ───────────────
config.ts:                                 global.css:
  vars({ '--primary': '23 23 23' })          @variant light { --primary: 23 23 23; }
  vars({ '--primary': '255 245 245' })       @variant dark  { --primary: 255 245 245; }

index.tsx:                                 index.uniwind.tsx:
  useColorScheme() hook                      Uniwind.setTheme('light'|'dark'|'adaptive')
  <View style={config[colorScheme]}>         <View>   ← no style prop for tokens;
                                                         CSS vars apply automatically
```

| Aspect | NativeWind | UniWind |
|---|---|---|
| Token source | JS object via `vars()` | CSS file via `@variant` |
| Theme switch | `setColorScheme()` hook | `Uniwind.setTheme()` static call |
| Token application | Inline style on root `<View>` | Automatic via stylesheet |
| `config.ts` | Contains all token values | Empty (theming is in CSS) |

Both variants live in `src/` alongside the nativewind originals. The mapper routes them:
- `index.tsx` / `config.ts` → skipped for the UniWind app
- `index.uniwind.tsx` / `config.uniwind.ts` → renamed to the canonical names

---

## 7. Theme Architecture (UniWind)

```
global.css
│
├── @layer theme                    ← runtime-switchable token definitions
│   └── :root
│       ├── @variant light { --primary: 23 23 23; ... }
│       └── @variant dark  { --primary: 255 245 245; ... }
│
└── @theme inline                   ← maps tokens → Tailwind color utilities
    ├── --color-primary:            rgb(var(--primary))
    ├── --color-foreground:         rgb(var(--foreground))
    └── ...                         (one entry per token)

metro.config.js
└── withUniwindConfig(config, {
        cssEntryFile: './global.css',
        extraThemes: ['dark'],          ← registers the dark variant
    })

GluestackUIProvider (index.uniwind.tsx)
└── Uniwind.setTheme(mode)              ← 'light' | 'dark' | 'adaptive'
        'adaptive' maps to system preference
```

The token RGB values in `global.css` are kept intentionally identical to `config.ts` so that the same Tailwind utility classes (`bg-primary`, `text-foreground`, etc.) produce the same visual output regardless of which engine is in use.

---

## 8. Usage

```bash
# Initial one-time sync (populates components/ui/ in the app)
yarn sync:starter-kit-expo-uniwind

# Watch mode during development (re-syncs on src/ changes)
yarn dev:starter-kit-expo-uniwind

# Link local @gluestack-ui packages via yalc (after yarn install in the app)
yarn link:apps-starter-kit-expo-uniwind
```
