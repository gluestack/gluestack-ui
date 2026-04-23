/**
 * Design System Exporter — Registry-driven, zero hardcoding.
 *
 * Flow:
 *  1. Each RegistryEntry carries `baseClasses`, `variantClasses`, `subPartClasses`
 *  2. For each variant combo, we merge the relevant class strings
 *  3. A Tailwind class parser resolves those strings → Figma style objects
 *     using ONLY token values from config.ts (no hex anywhere)
 */
import {
  COMPONENT_REGISTRY,
  getVariantCombinations,
  type RegistryEntry,
} from './component-registry';
import { extractTokens, type DesignTokens } from './token-extractor';
import { colors } from '../../components/ui/gluestack-ui-provider/config';

// ─── Token resolution (single source of truth: config.ts) ────────────────────

type ColorMode = 'light' | 'dark';

/** Resolve a semantic token name (without --) → resolved rgb() string */
function tok(name: string, mode: ColorMode = 'light'): string {
  const palette = colors[mode] as Record<string, string>;
  const raw = palette[`--${name}`];
  if (!raw) return 'transparent';
  const parts = raw.trim().split(/\s+/);
  if (parts.length === 3) return `rgb(${parts[0]}, ${parts[1]}, ${parts[2]})`;
  return raw;
}

// ─── Scales (mirror tailwind.config.ts) ──────────────────────────────────────

const SP: Record<string, number> = {
  '0': 0, '0.5': 2, '1': 4, '1.5': 6, '2': 8, '2.5': 10, '3': 12,
  '3.5': 14, '4': 16, '5': 20, '6': 24, '7': 28, '8': 32, '9': 36,
  '10': 40, '11': 44, '12': 48, '14': 56, '16': 64, '20': 80, '24': 96,
};
const sp = (k: string) => SP[k] ?? 0;

const RADII: Record<string, number> = {
  none: 0, sm: 6, '': 8, md: 8, lg: 10, xl: 14, '2xl': 16, '3xl': 24, full: 9999,
};

const FS: Record<string, number> = {
  '2xs': 10, xs: 12, sm: 14, base: 16, lg: 18, xl: 20,
  '2xl': 24, '3xl': 30, '4xl': 36, '5xl': 48,
};

// ─── Tailwind class → Figma style resolver ───────────────────────────────────

export interface FigmaStyles {
  backgroundColor?: string;
  borderRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  fontFamily?: string;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  gap?: number;
  flexDirection?: 'row' | 'column';
  alignItems?: string;
  justifyContent?: string;
  width?: number | string;
  height?: number | string;
  opacity?: number;
}

function parseClasses(classes: string, mode: ColorMode = 'light'): FigmaStyles {
  const s: FigmaStyles = {};
  for (const c of classes.split(/\s+/).filter(Boolean)) {
    // Background
    if (c === 'bg-transparent') { s.backgroundColor = 'transparent'; continue; }
    if (c.startsWith('bg-')) { s.backgroundColor = tok(c.slice(3), mode); continue; }

    // Text color vs font size
    if (c.startsWith('text-')) {
      const k = c.slice(5);
      if (FS[k] !== undefined) { s.fontSize = FS[k]; continue; }
      if (k === 'transparent') { s.color = 'transparent'; continue; }
      s.color = tok(k, mode); continue;
    }

    // Border
    if (c === 'border') { s.borderWidth = 1; continue; }
    if (c === 'border-2') { s.borderWidth = 2; continue; }
    if (c === 'border-0') { s.borderWidth = 0; continue; }
    if (c === 'border-transparent') { s.borderColor = 'transparent'; continue; }
    if (c.startsWith('border-')) {
      const k = c.slice(7);
      if (!isNaN(Number(k))) { s.borderWidth = Number(k); continue; }
      s.borderColor = tok(k, mode); continue;
    }

    // Border radius
    if (c === 'rounded') { s.borderRadius = 8; continue; }
    if (c.startsWith('rounded-')) { s.borderRadius = RADII[c.slice(8)] ?? 8; continue; }

    // Padding
    if (c.startsWith('px-')) { const v = sp(c.slice(3)); s.paddingLeft = v; s.paddingRight = v; continue; }
    if (c.startsWith('py-')) { const v = sp(c.slice(3)); s.paddingTop = v; s.paddingBottom = v; continue; }
    if (c.startsWith('pt-')) { s.paddingTop = sp(c.slice(3)); continue; }
    if (c.startsWith('pb-')) { s.paddingBottom = sp(c.slice(3)); continue; }
    if (c.startsWith('pl-')) { s.paddingLeft = sp(c.slice(3)); continue; }
    if (c.startsWith('pr-')) { s.paddingRight = sp(c.slice(3)); continue; }
    if (c.startsWith('p-')) { const v = sp(c.slice(2)); s.paddingTop = v; s.paddingRight = v; s.paddingBottom = v; s.paddingLeft = v; continue; }

    // Gap
    if (c.startsWith('gap-')) { s.gap = sp(c.slice(4)); continue; }

    // Flex
    if (c === 'flex-row') { s.flexDirection = 'row'; continue; }
    if (c === 'flex-col') { s.flexDirection = 'column'; continue; }
    if (c === 'items-center') { s.alignItems = 'center'; continue; }
    if (c === 'items-start') { s.alignItems = 'flex-start'; continue; }
    if (c === 'items-end') { s.alignItems = 'flex-end'; continue; }
    if (c === 'justify-center') { s.justifyContent = 'center'; continue; }
    if (c === 'justify-between') { s.justifyContent = 'space-between'; continue; }
    if (c === 'justify-start') { s.justifyContent = 'flex-start'; continue; }

    // Size
    if (c === 'w-full') { s.width = '100%'; continue; }
    if (c.startsWith('w-')) { s.width = sp(c.slice(2)); continue; }
    if (c === 'h-fit' || c === 'h-auto') { /* HUG sizing — omit */ continue; }
    if (c.startsWith('h-')) { s.height = sp(c.slice(2)); continue; }

    // Font weight
    if (c === 'font-normal') { s.fontWeight = '400'; continue; }
    if (c === 'font-medium') { s.fontWeight = '500'; continue; }
    if (c === 'font-semibold') { s.fontWeight = '600'; continue; }
    if (c === 'font-bold') { s.fontWeight = '700'; continue; }

    // Opacity
    if (c === 'opacity-50') { s.opacity = 0.5; continue; }
    if (c === 'opacity-0') { s.opacity = 0; continue; }
  }
  return s;
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface FigmaNodeJSON {
  type: 'FRAME' | 'TEXT' | 'RECTANGLE' | 'ELLIPSE' | 'GROUP';
  name: string;
  styles: FigmaStyles;
  children?: FigmaNodeJSON[];
}

export interface ComponentInstance {
  props: Record<string, string | number | boolean>;
  label: string;
  tree: FigmaNodeJSON;
}

export interface ComponentDefinition {
  name: string;
  description: string;
  importPath: string;
  variants: Record<string, string[]>;
  defaultProps: Record<string, string | number | boolean>;
  subParts: Array<{ name: string; description: string }>;
  instances: ComponentInstance[];
}

export interface DesignSystemExport {
  metadata: {
    source: 'gluestack-nextjs';
    version: string;
    exportedAt: string;
    colorMode: 'light' | 'dark';
    totalComponents: number;
    totalTokens: number;
  };
  tokens: DesignTokens;
  components: ComponentDefinition[];
}

// ─── Registry-driven builder ─────────────────────────────────────────────────

function isTextLike(name: string): boolean {
  const lower = name.toLowerCase();
  return (
    lower.includes('text') ||
    lower.includes('title') ||
    lower.includes('label') ||
    lower.includes('description') ||
    lower.includes('heading') ||
    lower.includes('caption')
  );
}

/** Sub-parts that are visual shapes (not containers, not text) */
function isShapePart(name: string): boolean {
  const lower = name.toLowerCase();
  return (
    lower.includes('indicator') ||
    lower.includes('thumb') ||
    lower.includes('track') ||
    lower.includes('separator') ||
    lower.includes('icon') ||
    lower.includes('badge') // AvatarBadge = small circle
  );
}

/** Sample display text for TEXT nodes so they show real content in Figma */
const SAMPLE_TEXT: Record<string, string> = {
  ButtonText: 'Click me',
  BadgeText: 'New',
  AlertTitle: 'Heads up!',
  AlertDescription: 'Something needs your attention.',
  CheckboxLabel: 'Accept terms',
  RadioLabel: 'Option A',
  CardTitle: 'Card Title',
  CardDescription: 'A short description goes here.',
  FormControlLabel: 'Email address',
  FormControlHelperText: 'We will never share your email.',
  FormControlErrorText: 'This field is required.',
  ToastTitle: 'Success',
  ToastDescription: 'Your changes have been saved.',
  AccordionTrigger: 'Section heading',
  AccordionContent: 'Collapsible section content goes here.',
  TabsTrigger: 'Tab',
  ModalHeader: 'Dialog title',
  ModalBody: 'Dialog body content.',
  ModalFooter: '',
  AvatarFallbackText: 'JD',
  // Pure-text root components
  Heading: 'Heading',
  Text: 'Body text',
};

function buildInstanceTree(
  entry: RegistryEntry,
  props: Record<string, string>,
  mode: ColorMode = 'light',
): FigmaNodeJSON {
  // Merge: baseClasses + per-variant classes
  let allClasses = entry.baseClasses;
  const vc = (entry as any).variantClasses as
    | Record<string, Record<string, string>>
    | undefined;
  if (vc) {
    for (const [propKey, propValue] of Object.entries(props)) {
      const extra = vc[propKey]?.[propValue];
      if (extra) allClasses += ' ' + extra;
    }
  }

  const parsedRoot = parseClasses(allClasses, mode);

  const rootStyles: FigmaStyles = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 4,
    ...parsedRoot,
  };

  const variantLabel = Object.keys(props).length
    ? Object.entries(props).map(([k, v]) => `${k}=${v}`).join(', ')
    : 'default';

  // ── Pure-text root (Heading, Text) — render as TEXT node ────────────────
  if (entry.subParts.length === 0 && !entry.isContainer) {
    return {
      type: 'TEXT',
      name: variantLabel,
      styles: {
        color: parsedRoot.color ?? tok('foreground', mode),
        fontSize: parsedRoot.fontSize ?? 16,
        fontWeight: parsedRoot.fontWeight ?? '400',
        fontFamily: 'Inter',
      },
    };
  }

  // ── Divider — render as a thin RECTANGLE ────────────────────────────────
  if (entry.name === 'Divider') {
    const isVertical = props.orientation === 'vertical';
    return {
      type: 'RECTANGLE',
      name: variantLabel,
      styles: {
        backgroundColor: tok('border', mode),
        width: isVertical ? 1 : 240,
        height: isVertical ? 80 : 1,
        borderRadius: 0,
      },
    };
  }

  // ── Skeleton — solid rectangle ───────────────────────────────────────────
  if (entry.name === 'Skeleton') {
    return {
      type: 'RECTANGLE',
      name: variantLabel,
      styles: {
        backgroundColor: tok('muted', mode),
        width: 200,
        height: 16,
        borderRadius: parsedRoot.borderRadius ?? 4,
      },
    };
  }

  // ── Spinner — ellipse ────────────────────────────────────────────────────
  if (entry.name === 'Spinner') {
    const d = parsedRoot.width ?? parsedRoot.height ?? 24;
    return {
      type: 'ELLIPSE',
      name: variantLabel,
      styles: {
        width: d,
        height: d,
        backgroundColor: 'transparent',
        borderColor: tok('border', mode),
        borderWidth: 2,
      },
    };
  }

  // ── Build children from subParts ─────────────────────────────────────────
  const spc = (entry as any).subPartClasses as Record<string, string> | undefined;
  const children: FigmaNodeJSON[] = entry.subParts.map((sub) => {
    const subClasses = spc?.[sub.name] ?? '';
    const subParsed = parseClasses(subClasses, mode);
    const sampleText = SAMPLE_TEXT[sub.name] ?? sub.name;

    if (isTextLike(sub.name)) {
      return {
        type: 'TEXT' as const,
        name: sampleText,
        styles: {
          color: tok('foreground', mode),
          fontSize: 14,
          fontFamily: 'Inter',
          fontWeight: '400',
          ...subParsed,
        },
      };
    }

    if (isShapePart(sub.name)) {
      // Indicators, thumbs, tracks → RECTANGLE with explicit dimensions
      return {
        type: 'RECTANGLE' as const,
        name: sub.name,
        styles: {
          backgroundColor: subParsed.backgroundColor ?? tok('muted', mode),
          borderColor: subParsed.borderColor,
          borderWidth: subParsed.borderWidth,
          borderRadius: subParsed.borderRadius ?? 4,
          width: subParsed.width ?? 16,
          height: subParsed.height ?? 16,
        },
      };
    }

    // Container sub-parts (ModalHeader, TabsList, etc.)
    return {
      type: 'FRAME' as const,
      name: sub.name,
      styles: {
        backgroundColor: subParsed.backgroundColor ?? 'transparent',
        borderRadius: subParsed.borderRadius ?? 0,
        borderColor: subParsed.borderColor,
        borderWidth: subParsed.borderWidth,
        flexDirection: subParsed.flexDirection ?? 'row',
        alignItems: subParsed.alignItems ?? 'center',
        gap: subParsed.gap ?? 8,
        paddingTop: subParsed.paddingTop ?? 8,
        paddingBottom: subParsed.paddingBottom ?? 8,
        paddingLeft: subParsed.paddingLeft ?? 8,
        paddingRight: subParsed.paddingRight ?? 8,
      },
    };
  });

  return { type: 'FRAME', name: variantLabel, styles: rootStyles, children };
}

// ─── Main assembler ───────────────────────────────────────────────────────────

export function buildDesignSystemExport(
  colorMode: 'light' | 'dark' = 'light',
): DesignSystemExport {
  const tokens = extractTokens();

  const components: ComponentDefinition[] = COMPONENT_REGISTRY.map((entry) => {
    const combinations = getVariantCombinations(entry);

    const instances: ComponentInstance[] = combinations.map((combo) => {
      const label = Object.keys(combo).length
        ? Object.entries(combo).map(([k, v]) => `${k}=${v}`).join(', ')
        : 'default';

      return {
        props: combo,
        label,
        tree: buildInstanceTree(entry, combo, colorMode),
      };
    });

    const variantsRecord: Record<string, string[]> = {};
    for (const v of entry.variants) variantsRecord[v.name] = v.values;

    return {
      name: entry.name,
      description: entry.description,
      importPath: entry.importPath,
      variants: variantsRecord,
      defaultProps: entry.defaultProps,
      subParts: entry.subParts,
      instances,
    };
  });

  const totalTokens =
    Object.keys(tokens.colors.light).length +
    Object.keys(tokens.spacing).length +
    Object.keys(tokens.typography.fontSizes).length +
    Object.keys(tokens.radius).length +
    Object.keys(tokens.shadows).length;

  return {
    metadata: {
      source: 'gluestack-nextjs',
      version: '2.0.0',
      exportedAt: new Date().toISOString(),
      colorMode,
      totalComponents: components.length,
      totalTokens,
    },
    tokens,
    components,
  };
}
