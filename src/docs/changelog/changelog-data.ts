export interface ChangelogEntry {
  title: string;
  slug: string;
  date: string;
  authors: Array<{
    id: number;
    name: string;
    avatar_url: string;
    occupation?: string;
  }>;
  excerpt?: string;
  image?: string;
  content?: string;
}

export const changelogEntries: ChangelogEntry[] = [
  {
    title: 'gluestack-ui v5 (alpha) release',
    slug: 'v5-alpha-release',
    date: '2026-03-11T00:00:00Z',
    authors: [
      {
        id: 1,
        name: 'Sanchit Kumar',
        avatar_url: 'https://avatars.githubusercontent.com/u/101696945?v=4',
        occupation: 'Building gluestack-ui',
      },
    ],
    excerpt: 'gluestack-ui v5 brings Tailwind CSS v4 to React Native — choose between NativeWind v5 or UniWind, use the new CLI upgrade command, and get CSS-first theming with no tailwind.config.js.',
    image: '',
    content: `We're excited to announce gluestack-ui v5 alpha — a major step forward that moves the entire styling foundation to **Tailwind CSS v4**.

## What's New

### Tailwind CSS v4 (CSS-first theming)

Tailwind v4 eliminates \`tailwind.config.js\` in favor of a CSS-first approach. All design tokens now live in \`global.css\` via \`@layer theme\`, giving you a single, readable source of truth for your entire design system:

\`\`\`
@layer theme {
  :root {
    --primary: 23 23 23;
    --background: 255 255 255;
    /* ... */
  }
  @media (prefers-color-scheme: dark) {
    :root { --primary: 255 245 245; /* ... */ }
  }
}

@theme inline {
  --color-primary: rgb(var(--primary));
  /* maps to bg-primary, text-primary, etc. */
}
\`\`\`

### Two Styling Engine Choices

#### NativeWind v5 — Expo & React Native CLI

NativeWind v5 is the v5-compatible update to the familiar NativeWind engine. New in this version:

- \`nativewind@^5.0.0-preview.2\` + new \`react-native-css@^3.0.4\` package
- \`postcss.config.js\` required (uses \`@tailwindcss/postcss\`)
- \`metro.config.js\` uses \`withNativewind\` from \`nativewind/metro\`
- \`react-native-css-env.d.ts\` replaces \`nativewind-env.d.ts\`
- \`lightningcss\` must be pinned to \`1.30.1\` in \`package.json\` overrides

#### UniWind — Expo only

UniWind is an alternative Tailwind v4 engine that processes styles natively on device, without a PostCSS step. Key differences from NativeWind v5:

- No \`postcss.config.js\` needed
- Theme toggling via \`.light\` / \`.dark\` class selectors on \`<html>\` (web) or Appearance API (native)
- \`metro.config.js\` uses \`withUniwindConfig\` from \`uniwind/metro\`
- Expo-only (no Next.js or bare React Native CLI support)

### New \`upgrade\` CLI Command

The new \`upgrade\` command automates migrating an existing gluestack-ui v4 project to v5:

\`\`\`bash
npx gluestack-ui@alpha upgrade
\`\`\`

You'll be prompted to choose a styling engine:

\`\`\`
◆ Which styling engine would you like to upgrade to?
│ ● NativeWind v5 (Tailwind CSS v4)
│ ○ UniWind (Tailwind CSS v4, Expo-only)
│ ○ Stay on current version
\`\`\`

**NativeWind v5 upgrade path** handles:
1. Pinning \`lightningcss@1.30.1\`
2. Package migration (nativewind v4 → v5, adds react-native-css, upgrades tailwindcss + @tailwindcss/postcss)
3. Rewrites \`global.css\` to Tailwind v4 format
4. Creates \`postcss.config.js\`
5. Updates \`metro.config.js\` (preserves existing options like \`inlineRem\`)
6. Prompts about \`tailwind.config.js\` — never auto-deleted
7. Creates \`react-native-css-env.d.ts\`

**UniWind upgrade path** handles:
1. Replaces nativewind with uniwind, upgrades tailwindcss to v4
2. Rewrites \`global.css\` to UniWind format
3. Updates \`metro.config.js\` to use \`withUniwindConfig\`
4. Removes \`nativewind/babel\` from \`babel.config.js\`
5. Deletes \`tailwind.config.js\`
6. Replaces \`nativewind-env.d.ts\` with \`uniwind-types.d.ts\`

> **Note:** After running the upgrade command, commit your changes and then re-add components to get v5 versions:
> \`\`\`bash
> npx gluestack-ui@alpha add button accordion modal # etc.
> \`\`\`

### Updated \`@gluestack-ui/core\` and \`@gluestack-ui/utils\`

Both packages have been updated to \`^5.0.0-alpha.0\` and \`^5.0.1-alpha.0\` respectively, with full support for NativeWind v5 and UniWind via \`cssInterop\` → \`styled()\` migration.

### Separate Component Registry Branch

v5 components are served from the \`main-v5-alpha\` branch. The CLI automatically selects the correct branch based on the detected styling engine — no manual configuration needed.

## Breaking Changes

- **\`tailwind.config.js\` is no longer used** — migrate tokens to \`global.css\`
- **\`nativewind@^4.x\` → \`nativewind@^5.0.0-preview.2\`** — components must be re-added
- **\`react-native-css\`** is now a required peer dependency for NativeWind v5 projects
- **\`lightningcss\` must be pinned** to \`1.30.1\` to avoid build errors
- **\`global.css\` format changed** — uses \`@import "tailwindcss/theme.css"\` instead of \`@tailwind\` directives
- **Component APIs are unchanged** — imports and usage remain identical

## Platform Support

| Engine        | Expo | React Native CLI | Next.js |
| :------------ | :--: | :--------------: | :-----: |
| NativeWind v5 |  ✅  |        ✅        |   ❌    |
| UniWind       |  ✅  |        ❌        |   ❌    |

> The \`upgrade\` CLI command is not supported for Next.js projects.

## Getting Started

### New project

\`\`\`bash
npm create gluestack@alpha
\`\`\`

### Upgrade existing v4 project

\`\`\`bash
npx gluestack-ui@alpha upgrade
\`\`\`

See the [Upgrade to v5 guide](/ui/docs/guides/more/upgrade-to-v5) for full details.

We're actively gathering feedback — join us on [Discord](https://discord.gg/gluestack) or open an issue on [GitHub](https://github.com/gluestack/gluestack-ui/issues).`,
  },
  {
    title: "gluestack-ui v4.1 (alpha) release",
    slug: 'v4-1-alpha-release',
    date: '2026-02-10T00:00:00Z',
    authors: [
      {
        id: 1,
        name: 'Sanchit Kumar',
        avatar_url: 'https://avatars.githubusercontent.com/u/101696945?v=4',
        occupation: 'Building gluestack-ui',
      },
    ],
    excerpt: 'Uniwind and Tailwind v4 support now available for Expo projects, delivering significant performance improvements.',
    image: '',
    content: `We're excited to announce gluestack-ui v4.1 alpha, bringing Uniwind and Tailwind v4 support to your Expo projects with impressive performance gains.

## What's New

### Uniwind + Tailwind v4 Support

gluestack-ui v4.1 alpha now supports Uniwind with Tailwind v4 for Expo projects, offering:

- **Significant Performance Improvements**: Measurably faster rendering
- **Tailwind v4 Features**: Access to all the latest Tailwind CSS v4 utilities and improvements
- **Unified Styling**: Write styles once, share across platforms
- **Better Developer Experience**: Improved IntelliSense and build-time optimizations

### Performance Gains

Our internal testing shows substantial performance improvements when using gluestack-ui with Uniwind, particularly in:

- Component render times
- Style processing efficiency
- Overall app responsiveness

## Getting Started

### For New Projects

\`\`\`bash
npm create gluestack@alpha
\`\`\`

### For Existing Projects

\`\`\`bash
npx gluestack-ui@alpha init
\`\`\`

## Platform Support

Currently available for **Expo projects only**. Web support coming soon.

Check out our updated documentation at [https://v4.gluestack.io](https://v4.gluestack.io) for migration guides and detailed examples.

We're actively gathering feedback as we continue evolving v4.`,
  },
  {
    title: "gluestack-ui v4 (alpha) release",
    slug: 'v4-alpha-release',
    date: '2026-01-23T00:00:00Z',
    authors: [
      {
        id: 1,
        name: 'Sanchit Kumar',
        avatar_url: 'https://avatars.githubusercontent.com/u/101696945?v=4',
        occupation: 'Building gluestack-ui',
      },
    ],
    excerpt: 'This version introduces a shadcn-inspired design system and a refreshed animation foundation powered by react-native-reanimated.',
    image: '/images/blogs/expo55-beta.png',
    content: `This version introduces a shadcn-inspired design system and a refreshed animation foundation powered by react-native-reanimated.

## Highlights

- Components redesigned to closely align with shadcn UI
- Migration to react-native-reanimated for animations
- Upgraded KitchenSink demo app for previews and testing
- New documentation available at [https://v4.gluestack.io](https://v4.gluestack.io)
- Expo 55 (beta) support

## Why react-native-reanimated?

- Native-first performance (UI thread)
- Better Expo & RN ecosystem alignment

## Why shadcn UI replica design system?

It's easier for modern developers and designers to follow a common design language already popularized by shadcn.

## What's coming next:

- Uniwind support
- NativeWind v5 support

We're actively gathering feedback as we continue evolving v4.`,
  },
  {
    title: 'gluestack-ui v3 release',
    slug: 'v3-release',
    date: '2025-09-03T00:00:00Z',
    authors: [
      {
        id: 2,
        name: 'Paridhi Tulsian',
        avatar_url: 'https://avatars.githubusercontent.com/u/230149282?v=4',
        occupation: 'Digital Marketing Lead',
      },
    ],
    excerpt: 'Major release with improved performance, new components, and enhanced developer experience.',
    image: '/images/blogs/banner-1.png',
    content: `After months of development, feedback, and testing, we're thrilled to launch gluestack UI v3 — the next major evolution of our React Native and React component library.

This release is packed with performance improvements, accessibility upgrades, and a refined developer experience. It also introduces a brand-new Source-to-Destination architecture for contributors, ensuring gluestack remains easy to maintain and extend.

## What's New in gluestack v3

### 1. Blazing-Fast Performance and Leaner Build

We've optimized the core library to be faster and lighter, reducing bundle size while improving runtime performance.

### 2. Enhanced Developer Experience

Improved TypeScript support, better documentation, and streamlined component APIs make development smoother than ever.

### 3. Source-to-Destination Architecture

A new architecture that makes it easier for contributors to maintain and extend the library.`,
  },
  {
    title: 'gluestack-ui v2: Stable Release with NativeWind v4.1 Support',
    slug: 'v2-stable-release',
    date: '2024-12-03T00:00:00Z',
    authors: [
      {
        id: 3,
        name: 'Viraj Joshi',
        avatar_url: 'https://avatars.githubusercontent.com/u/66306233?v=4',
        occupation: 'Co-author of gluestack-ui',
      },
    ],
    excerpt: 'Stable release with full NativeWind v4.1 support, improved TypeScript types, and enhanced component library.',
    content: `We're excited to announce the stable release of gluestack-ui v2 with full NativeWind v4.1 support.

## Key Features

### NativeWind v4.1 Support

Full compatibility with NativeWind v4.1, including all new features and improvements.

### Improved TypeScript Types

Enhanced type safety across all components with better IntelliSense support.

### Enhanced Component Library

New components and improvements to existing ones based on community feedback.`,
  },
  {
    title: 'gluestack-ui v2 is here!',
    slug: 'v2-release',
    date: '2024-07-23T00:00:00Z',
    authors: [
      {
        id: 4,
        name: 'Suraj Ahmed',
        avatar_url: 'https://avatars.githubusercontent.com/u/9393975?v=4',
        occupation: 'Building gluestack-ui',
      },
    ],
    excerpt: 'Complete rewrite with modern architecture, better performance, and improved developer experience.',
    content: `We're thrilled to announce gluestack-ui v2, a complete rewrite of our component library.

## What's Changed

### Modern Architecture

Complete rewrite with a modern, maintainable architecture that's easier to extend and customize.

### Better Performance

Optimized components and reduced bundle size for faster load times and better runtime performance.

### Improved Developer Experience

Better documentation, improved TypeScript support, and streamlined APIs make development more enjoyable.`,
  },
];

export function getChangelogEntryBySlug(slug: string): ChangelogEntry | undefined {
  return changelogEntries.find((entry) => entry.slug === slug);
}

export function getAllChangelogSlugs(): string[] {
  return changelogEntries.map((entry) => entry.slug);
}
