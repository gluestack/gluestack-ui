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
