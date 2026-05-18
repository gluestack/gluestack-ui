# gluestack-ui Architecture & Onboarding Guide

This guide covers everything you need to know to start contributing. It assumes you've already run `yarn` and `yarn sync`.

---

## Physical Layout

```
gluestack-ui/
├── src/                         ← YOU EDIT HERE. Single source of truth.
│   ├── components/ui/           ← 60 components (button, modal, input, etc.)
│   ├── docs-components/         ← Website-specific custom components
│   ├── docs/                    ← Markdown/MDX docs pages
│   └── sidebar.json             ← Navigation sidebar config
│
├── packages/                    ← Published npm packages
│   ├── gluestack-core/          ← Component factories (no styling)
│   ├── gluestack-utils/         ← Hooks, aria utils, NativeWind helpers
│   ├── gluestack-ui/            ← CLI tool (npx gluestack-ui init/add/upgrade)
│   ├── create-gluestack/        ← Project bootstrapper (npx create-gluestack)
│   └── ui-next-adapter/         ← Makes RNW components work in Next.js RSC
│
├── apps/                        ← Destination apps. GENERATED FILES LIVE HERE.
│   ├── website/                 ← gluestack.io docs site (Next.js)
│   ├── kitchen-sink/            ← Component playground (Expo)
│   ├── starter-kit-next/        ← Next.js starter template
│   └── starter-kit-expo/        ← Expo starter template
│
├── scripts/                     ← The sync engine
│   ├── dev.ts                   ← Watches src/, runs mappers
│   ├── create.ts                ← Scaffolds new components
│   └── mappers/                 ← Per-app sync logic
│       ├── website/
│       ├── kitchen-sink/
│       └── starter-kits/
```

**Iron rule**: `apps/*/components/ui/` is gitignored. If you edit a file there, it gets overwritten on the next `yarn sync`. Always edit in `src/`.

---

## How the Sync Engine Works

`scripts/dev.ts` watches `src/` with chokidar. When you save a file, it:

1. Parses the path to determine if it's a component (`src/components/ui/button/index.tsx` → component `button`) or a non-component file (docs, sidebar.json)
2. Calls `mapper.component('button', 'changed')` or `mapper.nonComponent(filePath)` on every active mapper
3. Each mapper copies files to its destination app, stripping what it doesn't need

### The three mappers

| Mapper         | Copies to                | Copies what                                                                              |
| -------------- | ------------------------ | ---------------------------------------------------------------------------------------- |
| `kitchen-sink` | `apps/kitchen-sink/`     | Component code + auto-generates `_layout.tsx` routes + `components-list.ts` from sidebar |
| `website`      | `apps/website/`          | Docs, examples, sidebar.json                                                             |
| `starter-kits` | Next + Expo starter apps | Component code only                                                                      |

Mappers strip files that don't belong in their target. For example, the kitchen-sink mapper at `scripts/mappers/kitchen-sink/componentsOperations.ts`:

```typescript
const mapperConfig = {
  sourcePath: path.resolve('src/components/ui'),
  destPath: path.resolve('apps/kitchen-sink/components/ui'),
  ignoreFiles: ['docs', 'examples', 'dependencies.json'],
};
```

---

## The Two-Layer Component Architecture

This is the central design pattern in the codebase. Every component separates **behavior** from **styling**.

### Layer 1: Creator (`packages/gluestack-core/`) — zero styling, pure logic

A **creator** is a factory function that receives primitive components (Pressable, View, Text, ActivityIndicator) and returns a compound component with interaction state management, accessibility, and context.

Example from `packages/gluestack-core/src/button/creator/index.tsx`:

```typescript
export function createButton({ Root, Text, Group, Spinner, Icon }) {
  const Button = ButtonMain(Root); // wraps Root with press/hover/focus/aria
  Button.Text = ButtonText(Text); // reads Button context, passes state props
  Button.Group = ButtonGroup(Group); // handles spacing, attachment, reversal
  Button.Spinner = ButtonSpinner(Spinner);
  Button.Icon = ButtonIcon(Icon);
  return Button;
}
```

The main wrapper at `packages/gluestack-core/src/button/creator/Button.tsx`:

- Uses `usePress`, `useHover`, `useFocus`, `useFocusRing` from `@gluestack-ui/utils/aria`
- Sets data attributes (`data-hover`, `data-focus`, `data-active`, `data-disabled`, `data-focus-visible`) as both React Native `dataSet` and DOM attributes
- Shares state via React Context so children (Text, Icon, Spinner) can inherit it

Child components read context and thread state through:

```typescript
export const ButtonText = (StyledButtonText) =>
  forwardRef(({ children, ...props }, ref) => {
    const { hover, focus, active, disabled, focusVisible } = useButtonContext();
    return (
      <StyledButtonText
        data-hover={hover ? 'true' : 'false'}
        data-focus={focus ? 'true' : 'false'}
        // ... etc
      />
    );
  });
```

This is the critical detail: the creator receives **any** component and wraps it with interaction state, exposing it as data attributes so NativeWind can target them with selectors like `data-[hover=true]:bg-primary/90`.

### Layer 2: Styled Component (`src/components/ui/`) — styling only

The copy-pasteable component. It calls the creator with React Native primitives, then applies Tailwind classes via `tva()`.

Full pattern from `src/components/ui/button/index.tsx`:

```typescript
'use client';
import { createButton } from '@gluestack-ui/core/button/creator';
import { tva, useStyleContext, withStyleContext } from '@gluestack-ui/utils/nativewind-utils';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';

const SCOPE = 'BUTTON';

// Step 1: Wrap primitive with style context
const Root = withStyleContext(Pressable, SCOPE);

// Step 2: Create unstyled compound component
const UIButton = createButton({
  Root: Root,
  Text,
  Group: View,
  Spinner: ActivityIndicator,
  Icon: StyledUIIcon,
});

// Step 3: Define variants with tva()
const buttonStyle = tva({
  base: 'rounded-md flex-row items-center justify-center data-[focus-visible=true]:web:outline-none ...',
  variants: {
    variant: {
      default: 'bg-primary data-[hover=true]:bg-primary/90 ...',
      outline: 'border border-border bg-background ...',
      ghost: 'data-[hover=true]:bg-accent ...',
    },
    size: {
      default: 'px-4 py-2',
      sm: 'min-h-8 rounded-md px-3 text-xs',
      lg: 'min-h-10 rounded-md px-8',
    },
  },
});

// Step 4: Forward variant props, passing context for children
const Button = forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  return (
    <UIButton
      {...props}
      className={buttonStyle({ variant, size, class: className })}
      context={{ variant, size }}  // children read this via useStyleContext(SCOPE)
    />
  );
});
```

Child components use `useStyleContext(SCOPE)` to inherit variant/size from their parent:

```typescript
const ButtonText = forwardRef(({ className, size, ...props }, ref) => {
  const { size: parentSize, variant: parentVariant } = useStyleContext(SCOPE);
  return (
    <UIButton.Text
      className={buttonTextStyle({
        parentVariants: { size: parentSize, variant: parentVariant },
        class: className,
      })}
    />
  );
});
```

This is how `<Button variant="outline" size="lg"><ButtonText>Hello</ButtonText></Button>` works — `ButtonText` automatically gets the right text color and font size without explicit props.

---

## The Three Key Utility Primitives

From `@gluestack-ui/utils/nativewind-utils`:

**`tva()`** — Thin wrapper around `tailwind-variants`. Defines `base`, `variants`, `compoundVariants`, and `parentVariants` (variants that respond to a parent's context).

**`withStyleContext(Component, SCOPE)`** — Wraps a component to accept a `context` prop. Descendants read that context via `useStyleContext(SCOPE)`.

**`useStyleContext(SCOPE)`** — Reads the parent's context. The `SCOPE` string (`'BUTTON'`) prevents cross-contamination between component types.

---

## Adding a New Component — Complete Walkthrough

### Step 1: Create the creator in `packages/gluestack-core/`

If the component needs core logic (most do), create a creator:

```
packages/gluestack-core/src/<component>/creator/
├── index.tsx          # Factory function: createX({ Root, Item, ... })
├── <Component>.tsx    # Main wrapper — owns state and context
├── <Component>Item.tsx  # Sub-component pieces
├── Context.tsx        # React Context for sharing state with children
└── types.ts           # TypeScript interfaces
```

Optionally add `packages/gluestack-core/src/<component>/aria/` if the component needs custom ARIA hooks.

### Step 2: Register the creator

In `packages/gluestack-core/src/index.ts`, add:

```typescript
export * from './<component>/creator';
```

In `packages/gluestack-core/package.json`, add to both `files` and `typesVersions`:

```json
"files": ["...", "<component>"]
// and in typesVersions:
"<component>/creator": ["./lib/esm/<component>/creator/index.d.ts"]
```

### Step 3: Create the styled component in `src/components/ui/`

```
src/components/ui/<component>/
├── index.tsx            # Uses createX() with RN primitives + tva()
├── dependencies.json    # External dependencies metadata
├── docs/
│   └── index.mdx        # Documentation page
└── examples/
    ├── basic/
    │   ├── meta.json    # { "title": "Basic Pagination", "description": "..." }
    │   └── template.handlebars   # JSX template
    └── with-icons/
        ├── meta.json
        └── template.handlebars
```

### Step 4: Add to navigation

Update `src/sidebar.json` — find the appropriate subsection under "Components" and add:

```json
{ "title": "ComponentName", "path": "/ui/docs/components/<component>" }
```

### Step 5: Sync and test

```bash
yarn sync                          # One-shot sync to all apps
cd apps/kitchen-sink && yarn dev   # Test component in Expo
cd apps/website && yarn dev        # Test docs + examples
```

### Step 6: If a new npm dependency is needed

Update `packages/gluestack-ui/src/dependencies.ts` so the CLI installs the right packages when users run `npx gluestack-ui add <component>`.

---

## Daily Development Commands

```bash
# Watchers
yarn dev                           # Watch src/ and sync to all apps
yarn dev:kitchen-sink              # Kitchen-sink only
yarn dev:website                   # Website only
yarn dev:starter-kits              # Starter-kits only
yarn dev --component=<name>        # Watch a single component

# One-shot
yarn sync                          # Sync all
yarn sync:kitchen-sink
yarn sync:website
yarn sync:starter-kits

# Build & format
yarn build                         # Build all packages (yarn workspaces run build)
yarn format                        # Prettier --write
yarn format:check                  # Prettier --check

# Scaffolding
yarn create:component              # Interactive component scaffolding
```

### Local package development (when editing packages)

```bash
# Prerequisite: npm install -g yalc

yarn link:create                   # Build gluestack-utils + gluestack-core, publish to yalc, start watch
yarn link:apps                     # Symlink yalc packages into all apps

# Now edit files in packages/gluestack-core/src/ or packages/gluestack-utils/src/
# Changes auto-rebuild and apps see them immediately

# When done:
yarn unlink:apps                   # Remove yalc links, apps revert to published versions
```

### Running the apps

```bash
cd apps/kitchen-sink && yarn dev   # Expo app at localhost:8081
cd apps/website && yarn dev        # Next.js docs at localhost:3000
```

---

## Publishing & Versioning

This repo uses [Changesets](https://github.com/changesets/changesets). Every PR that modifies packages must include a changeset.

```bash
yarn changeset                     # Create a changeset (interactive — picks packages + bump type)
yarn changeset:version             # Consume changesets, bump versions
yarn changeset:status              # Check current changeset state
```

---

## Key Patterns & Conventions

- **Always import from `'react-native'` directly** (View, Text, Pressable, ActivityIndicator). Never use NativeWind wrappers
- **Components start with `'use client'`** for Next.js React Server Components compatibility
- **Named exports only**: `export { Button, ButtonText, ButtonIcon, ButtonSpinner, ButtonGroup }`
- **Platform splits**: use `index.tsx` (native) + `index.web.tsx` (web) when implementations diverge
- **Interaction state**: always through data attributes (`data-hover`, `data-focus`, `data-active`, `data-disabled`, `data-focus-visible`), never through className conditionals
- **`tva()` parentVariants**: child components use this to respond to parent variant/size without prop drilling
- **`SCOPE` constants**: string identifiers (`'BUTTON'`, `'MODAL'`) passed to `withStyleContext`/`useStyleContext` to prevent context collisions
- **Cross-platform**: components work on React Native (iOS/Android), Expo, and web (via React Native Web)

---

## Files You Edit vs. Files You Never Touch

| Edit these                       | Never edit these (generated)                |
| -------------------------------- | ------------------------------------------- |
| `src/components/ui/*`            | `apps/*/components/ui/*`                    |
| `src/docs-components/*`          | `apps/website/components/docs-components/*` |
| `src/sidebar.json`               | `apps/website/sidebar.json`                 |
| `src/docs/*`                     | `apps/website/app/ui/docs/*`                |
| `packages/gluestack-core/src/*`  | `packages/gluestack-core/lib/*`             |
| `packages/gluestack-utils/src/*` | `packages/gluestack-utils/lib/*`            |

---

## Mental Model

```
You edit here:     src/components/ui/<name>/index.tsx
                         │
                    [yarn dev]
                         │
           ┌─────────────┼─────────────┐
           ▼              ▼              ▼
     kitchen-sink     website       starter-kits
     (testing)        (docs)        (templates)
                         │
           If component needs new core logic:
           packages/gluestack-core/src/<name>/creator/
                         │
           If component needs new hooks/aria:
           packages/gluestack-utils/src/
```

One line summary: **Edit source files in `src/`, let mappers handle the rest, never touch generated files.**
