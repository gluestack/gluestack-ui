# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
yarn

# Development — watch src/ and sync changes to all apps
yarn dev                          # all mappers
yarn dev:kitchen-sink             # kitchen-sink mapper only
yarn dev:website                  # website mapper only
yarn dev:starter-kits             # starter-kits mapper only

# One-time sync (no watching)
yarn sync                         # all mappers
yarn sync:kitchen-sink
yarn sync:website
yarn sync:starter-kits

# Local package development (uses yalc; requires `npm install -g yalc`)
yarn link:create                  # build + publish gluestack-utils & gluestack-core to yalc, start watch
yarn link:apps                    # link yalc packages into all apps
yarn link:apps-website            # link into website app only
yarn link:apps-kitchen-sink       # link into kitchen-sink app only
yarn unlink:apps                  # remove yalc links from all apps, clean up

# Build all packages
yarn build                        # runs `yarn workspaces run build`

# Formatting
yarn format                       # prettier --write
yarn format:check                 # prettier --check

# Create a new component (scaffolding script)
yarn create:component

# Changesets (for publishing packages)
yarn changeset                    # create a changeset
yarn changeset:version            # bump versions
yarn release                      # publish
```

To run an app locally after syncing: `cd apps/kitchen-sink && yarn dev` or `cd apps/website && yarn dev`.

## Architecture

### Source-to-Destination system

This is a **source-to-destination** repo. `src/` is the single source of truth. Mapper scripts in `scripts/` copy files from `src/` into `apps/` destinations. Generated files under `apps/*/components/ui/` are **gitignored** — never edit them directly. Always edit in `src/` and let the mappers sync.

```
src/
├── components/ui/        # All UI components (Button, Input, Modal, etc.)
├── docs-components/      # Documentation-specific components (website only)
├── docs/                 # Component docs/examples (website only)
└── sidebar.json          # Documentation sidebar config (website only)

apps/
├── website/              # gluestack.io documentation site (Next.js)
├── kitchen-sink/         # Component showcase & testing (Expo)
├── starter-kit-next/     # Next.js starter template
└── starter-kit-expo/     # Expo starter template
```

Mappers expose two hooks: `component(componentName, event)` for files within `components/ui/` and `nonComponent(filePath)` for everything else (docs, sidebar, docs-components). The dev script (`scripts/dev.ts`) watches `src/` with chokidar, debounces events (1s), and dispatches to active mappers.

### Packages

| Package | Purpose |
|---|---|
| `gluestack-ui` (published as `gluestack-ui`) | CLI for `gluestack-ui init`, `add`, `upgrade` commands. Contains templates for Next.js, Expo, React Native CLI project scaffolding. |
| `create-gluestack` | CLI for `create-gluestack` (project initializer). |
| `@gluestack-ui/core` | Component **creator** functions and **aria** hooks. Each component has a factory (`createX`) that takes primitive components (Pressable, View, Text, etc.) and returns a compound component with sub-components (Root, Text, Icon, Spinner, etc.). Deep sub-path exports like `@gluestack-ui/core/button/creator`. |
| `@gluestack-ui/utils` | Shared hooks (`useDisclose`, `useMediaQuery`, `useControllableState`, etc.), aria utilities, NativeWind helpers (`tva`, `withStyleContext`, `useStyleContext`). Deep sub-path exports like `@gluestack-ui/utils/nativewind-utils`. |
| `@gluestack/ui-next-adapter` | Next.js adapter that enables React Native Web components in RSC environments. |

### Component architecture

Each component follows a two-layer pattern:

1. **`packages/gluestack-core/src/<component>/creator/`** — The `createX` factory function. It receives generic primitive components (Root, Text, Group, Spinner, Icon) and composes them into a compound component with sub-components. This layer has **no styling** — pure logic and accessibility.

2. **`packages/gluestack-core/src/<component>/aria/`** — Accessibility hooks using React Aria for keyboard navigation, focus management, and screen reader support.

3. **`src/components/ui/<component>/index.tsx`** — The copy-pasteable component. Calls `createX()` with React Native primitives (Pressable, View, Text), applies styling via `tva()` (tailwind-variants), and uses `withStyleContext` for style inheritance. Components are `'use client'` and import from `react-native` directly (not from NativeWind wrappers).

```
src/components/ui/button/
├── index.tsx              # Styled Button component (copy-pasteable)
├── dependencies.json      # External dependencies used by this component
├── docs/index.mdx         # Documentation page
└── examples/              # Usage examples (meta.json + template.handlebars)
```

### Adding a new component

1. `yarn create:component` scaffolds in `src/components/ui/`
2. If the component needs core logic: add a creator in `packages/gluestack-core/src/<name>/creator/`
3. If it needs a11y: add aria hooks in `packages/gluestack-core/src/<name>/aria/`
4. Add examples in `src/components/ui/<name>/examples/`
5. Add docs in `src/components/ui/<name>/docs/`
6. Update `src/sidebar.json` to list the component in navigation
7. If new dependencies are needed, update `packages/gluestack-ui/src/dependencies.ts` for CLI-based installs

### CI / publishing

- **Changesets** manage versioning across all packages. PRs should include a changeset via `yarn changeset`.
- CI workflows: `next-latest.yml` and `expo-latest.yml` run on PRs to `main`. `publish-production.yml` handles npm publishes.
- There's a preview publish system (`preview-publish.yml`, `cleanup-preview.yml`) for pre-release testing.