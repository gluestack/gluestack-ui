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
  background?: string; // gradient or complex background
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderColor?: string;
  borderWidth?: number;
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderStyle?: 'solid' | 'dashed' | 'dotted';
  color?: string;
  fontSize?: number;
  fontWeight?: string;
  fontFamily?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  textDecoration?: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
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
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  opacity?: number;
  position?: 'relative' | 'absolute';
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  inset?: number;
  zIndex?: number;
  overflow?: 'visible' | 'hidden' | 'auto';
  boxShadow?: string;
  aspectRatio?: string;
  flexGrow?: number;
  flexShrink?: number;
}

function parseClasses(classes: string, mode: ColorMode = 'light'): FigmaStyles {
  const s: FigmaStyles = {};
  for (const raw of classes.split(/\s+/).filter(Boolean)) {
    // Skip pseudo-state, responsive, dark:, native:, web:, data-* prefixes
    if (/^(hover:|focus:|active:|disabled:|dark:|native:|web:|data-|group-|peer-|first:|last:|even:|odd:|visited:|focus-within:|focus-visible:|motion-|lg:|md:|sm:|xl:|2xl:)/.test(raw)) continue;

    const c = raw;

    // ── Background ──────────────────────────────────────────────
    if (c === 'bg-transparent') { s.backgroundColor = 'transparent'; continue; }
    if (c === 'bg-white') { s.backgroundColor = 'rgb(255, 255, 255)'; continue; }
    if (c === 'bg-black') { s.backgroundColor = 'rgb(0, 0, 0)'; continue; }
    if (c === 'bg-current') { continue; }
    if (c.startsWith('bg-gradient')) {
      // Store the gradient string for later parsing
      s.background = c;
      continue;
    }
    if (c.startsWith('bg-') && !c.startsWith('bg-gradient')) {
      const val = c.slice(3);
      // Handle opacity suffix: bg-primary/90
      const [base, opacityStr] = val.split('/');
      const resolved = tok(base, mode);
      if (opacityStr && resolved !== 'transparent') {
        const opacity = parseInt(opacityStr) / 100;
        // Apply opacity by converting to rgba
        const rgbMatch = resolved.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (rgbMatch) {
          s.backgroundColor = `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${opacity})`;
          continue;
        }
      }
      s.backgroundColor = resolved;
      continue;
    }

    // ── Text color vs font size ─────────────────────────────────
    if (c.startsWith('text-')) {
      const val = c.slice(5);
      // font-size values
      if (FS[val] !== undefined) { s.fontSize = FS[val]; continue; }
      if (val === 'transparent') { s.color = 'transparent'; continue; }
      if (val === 'white') { s.color = 'rgb(255, 255, 255)'; continue; }
      if (val === 'black') { s.color = 'rgb(0, 0, 0)'; continue; }
      if (val === 'current') { continue; }
      // Handle opacity suffix: text-foreground/70
      const [base, opacityStr] = val.split('/');
      const resolved = tok(base, mode);
      if (opacityStr && resolved !== 'transparent') {
        const opacity = parseInt(opacityStr) / 100;
        const rgbMatch = resolved.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (rgbMatch) {
          s.color = `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${opacity})`;
          continue;
        }
      }
      s.color = resolved;
      continue;
    }

    // ── Text alignment ──────────────────────────────────────────
    if (c === 'text-left') { s.textAlign = 'left'; continue; }
    if (c === 'text-center') { s.textAlign = 'center'; continue; }
    if (c === 'text-right') { s.textAlign = 'right'; continue; }
    if (c === 'text-justify') { s.textAlign = 'justify'; continue; }

    // ── Text decoration ─────────────────────────────────────────
    if (c === 'underline') { s.textDecoration = 'underline'; continue; }
    if (c === 'line-through') { s.textDecoration = 'line-through'; continue; }
    if (c === 'no-underline') { s.textDecoration = 'none'; continue; }

    // ── Text transform ──────────────────────────────────────────
    if (c === 'uppercase') { s.textTransform = 'uppercase'; continue; }
    if (c === 'lowercase') { s.textTransform = 'lowercase'; continue; }
    if (c === 'capitalize') { s.textTransform = 'capitalize'; continue; }
    if (c === 'normal-case') { s.textTransform = 'none'; continue; }

    // ── Line height ─────────────────────────────────────────────
    if (c.startsWith('leading-')) {
      const k = c.slice(8);
      const LH: Record<string, string> = {
        none: '1', tight: '1.25', snug: '1.375', normal: '1.5',
        relaxed: '1.625', loose: '2',
        '3': '.75', '4': '1', '5': '1.25', '6': '1.5', '7': '1.75',
        '8': '2', '9': '2.25', '10': '2.5',
      };
      if (LH[k] !== undefined) s.lineHeight = LH[k];
      else s.lineHeight = k;
      continue;
    }

    // ── Letter spacing ──────────────────────────────────────────
    if (c.startsWith('tracking-')) {
      const k = c.slice(9);
      const LS: Record<string, string> = {
        tighter: '-0.05em', tight: '-0.025em', normal: '0em',
        wide: '0.025em', wider: '0.05em', widest: '0.1em',
      };
      if (LS[k] !== undefined) s.letterSpacing = LS[k];
      continue;
    }

    // ── Border ──────────────────────────────────────────────────
    if (c === 'border') { s.borderWidth = 1; s.borderStyle = 'solid'; continue; }
    if (c === 'border-0') { s.borderWidth = 0; continue; }
    if (c === 'border-2') { s.borderWidth = 2; s.borderStyle = 'solid'; continue; }
    if (c === 'border-4') { s.borderWidth = 4; s.borderStyle = 'solid'; continue; }
    if (c === 'border-8') { s.borderWidth = 8; s.borderStyle = 'solid'; continue; }
    if (c === 'border-transparent') { s.borderColor = 'transparent'; continue; }
    if (c === 'border-dashed') { s.borderStyle = 'dashed'; continue; }
    if (c === 'border-dotted') { s.borderStyle = 'dotted'; continue; }
    if (c === 'border-solid') { s.borderStyle = 'solid'; continue; }
    // Directional borders
    if (c === 'border-t') { s.borderTopWidth = 1; continue; }
    if (c === 'border-b') { s.borderBottomWidth = 1; continue; }
    if (c === 'border-l') { s.borderLeftWidth = 1; continue; }
    if (c === 'border-r') { s.borderRightWidth = 1; continue; }
    if (c === 'border-t-0') { s.borderTopWidth = 0; continue; }
    if (c === 'border-b-0') { s.borderBottomWidth = 0; continue; }
    if (c === 'border-l-0') { s.borderLeftWidth = 0; continue; }
    if (c === 'border-r-0') { s.borderRightWidth = 0; continue; }
    if (c === 'border-t-2') { s.borderTopWidth = 2; continue; }
    if (c === 'border-b-2') { s.borderBottomWidth = 2; continue; }
    if (c.startsWith('border-t-') && !c.startsWith('border-transparent')) {
      const k = c.slice(9);
      if (/^\d+$/.test(k)) { s.borderTopWidth = Number(k); continue; }
      s.borderColor = tok(k.split('/')[0], mode);
      continue;
    }
    if (c.startsWith('border-b-')) {
      const k = c.slice(9);
      if (/^\d+$/.test(k)) { s.borderBottomWidth = Number(k); continue; }
      s.borderColor = tok(k.split('/')[0], mode);
      continue;
    }
    if (c.startsWith('border-l-')) {
      const k = c.slice(9);
      if (/^\d+$/.test(k)) { s.borderLeftWidth = Number(k); continue; }
      s.borderColor = tok(k.split('/')[0], mode);
      continue;
    }
    if (c.startsWith('border-r-')) {
      const k = c.slice(9);
      if (/^\d+$/.test(k)) { s.borderRightWidth = Number(k); continue; }
      s.borderColor = tok(k.split('/')[0], mode);
      continue;
    }
    if (c.startsWith('border-')) {
      const k = c.slice(7);
      // Pure number = border width
      if (/^\d+$/.test(k)) { s.borderWidth = Number(k); continue; }
      // Otherwise it's a color token
      const base = k.split('/')[0];
      s.borderColor = tok(base, mode);
      continue;
    }

    // ── Border radius ───────────────────────────────────────────
    if (c === 'rounded') { s.borderRadius = 8; continue; }
    if (c === 'rounded-none') { s.borderRadius = 0; continue; }
    if (c === 'rounded-full') { s.borderRadius = 9999; continue; }
    if (c.startsWith('rounded-tl-')) { s.borderTopLeftRadius = RADII[c.slice(11)] ?? 8; continue; }
    if (c.startsWith('rounded-tr-')) { s.borderTopRightRadius = RADII[c.slice(11)] ?? 8; continue; }
    if (c.startsWith('rounded-bl-')) { s.borderBottomLeftRadius = RADII[c.slice(11)] ?? 8; continue; }
    if (c.startsWith('rounded-br-')) { s.borderBottomRightRadius = RADII[c.slice(11)] ?? 8; continue; }
    if (c.startsWith('rounded-t-')) { const v = RADII[c.slice(9)] ?? 8; s.borderTopLeftRadius = v; s.borderTopRightRadius = v; continue; }
    if (c.startsWith('rounded-b-')) { const v = RADII[c.slice(9)] ?? 8; s.borderBottomLeftRadius = v; s.borderBottomRightRadius = v; continue; }
    if (c.startsWith('rounded-l-')) { const v = RADII[c.slice(9)] ?? 8; s.borderTopLeftRadius = v; s.borderBottomLeftRadius = v; continue; }
    if (c.startsWith('rounded-r-')) { const v = RADII[c.slice(9)] ?? 8; s.borderTopRightRadius = v; s.borderBottomRightRadius = v; continue; }
    if (c.startsWith('rounded-')) {
      const k = c.slice(8);
      s.borderRadius = RADII[k] ?? 8;
      continue;
    }

    // ── Padding ─────────────────────────────────────────────────
    if (c.startsWith('px-')) { const v = sp(c.slice(3)); s.paddingLeft = v; s.paddingRight = v; continue; }
    if (c.startsWith('py-')) { const v = sp(c.slice(3)); s.paddingTop = v; s.paddingBottom = v; continue; }
    if (c.startsWith('pt-')) { s.paddingTop = sp(c.slice(3)); continue; }
    if (c.startsWith('pb-')) { s.paddingBottom = sp(c.slice(3)); continue; }
    if (c.startsWith('pl-')) { s.paddingLeft = sp(c.slice(3)); continue; }
    if (c.startsWith('pr-')) { s.paddingRight = sp(c.slice(3)); continue; }
    if (c.startsWith('p-')) { const v = sp(c.slice(2)); s.paddingTop = v; s.paddingRight = v; s.paddingBottom = v; s.paddingLeft = v; continue; }

    // ── Margin (stored but not directly used in Figma — for reference) ───

    // ── Gap ──────────────────────────────────────────────────────
    if (c.startsWith('gap-')) { s.gap = sp(c.slice(4)); continue; }

    // ── Flex ─────────────────────────────────────────────────────
    if (c === 'flex-row') { s.flexDirection = 'row'; continue; }
    if (c === 'flex-col') { s.flexDirection = 'column'; continue; }
    if (c === 'items-center') { s.alignItems = 'center'; continue; }
    if (c === 'items-start') { s.alignItems = 'flex-start'; continue; }
    if (c === 'items-end') { s.alignItems = 'flex-end'; continue; }
    if (c === 'items-stretch') { s.alignItems = 'stretch'; continue; }
    if (c === 'items-baseline') { s.alignItems = 'baseline'; continue; }
    if (c === 'justify-center') { s.justifyContent = 'center'; continue; }
    if (c === 'justify-between') { s.justifyContent = 'space-between'; continue; }
    if (c === 'justify-start') { s.justifyContent = 'flex-start'; continue; }
    if (c === 'justify-end') { s.justifyContent = 'flex-end'; continue; }
    if (c === 'justify-around') { s.justifyContent = 'space-around'; continue; }
    if (c === 'justify-evenly') { s.justifyContent = 'space-evenly'; continue; }
    if (c === 'flex-grow' || c === 'grow') { s.flexGrow = 1; continue; }
    if (c === 'grow-0') { s.flexGrow = 0; continue; }
    if (c.startsWith('grow-')) { s.flexGrow = Number(c.slice(5)); continue; }
    if (c === 'flex-shrink-0' || c === 'shrink-0') { s.flexShrink = 0; continue; }
    if (c === 'shrink') { s.flexShrink = 1; continue; }
    if (c.startsWith('shrink-')) { s.flexShrink = Number(c.slice(7)); continue; }

    // ── Position ─────────────────────────────────────────────────
    if (c === 'relative') { s.position = 'relative'; continue; }
    if (c === 'absolute') { s.position = 'absolute'; continue; }
    if (c === 'static') { s.position = 'relative'; continue; }

    // ── Inset (for absolute positioning) ─────────────────────────
    if (c.startsWith('inset-')) { const v = sp(c.slice(6)); s.top = v; s.left = v; s.right = v; s.bottom = v; s.inset = v; continue; }
    if (c === 'inset-0') { s.top = 0; s.left = 0; s.right = 0; s.bottom = 0; s.inset = 0; continue; }
    if (c === 'inset-auto') { continue; }
    if (c.startsWith('top-')) { s.top = sp(c.slice(4)); continue; }
    if (c.startsWith('left-')) { s.left = sp(c.slice(5)); continue; }
    if (c.startsWith('right-')) { s.right = sp(c.slice(6)); continue; }
    if (c.startsWith('bottom-')) { s.bottom = sp(c.slice(7)); continue; }

    // ── Z-index ─────────────────────────────────────────────────
    if (c.startsWith('z-')) { s.zIndex = Number(c.slice(2)) || 0; continue; }

    // ── Overflow ─────────────────────────────────────────────────
    if (c === 'overflow-hidden') { s.overflow = 'hidden'; continue; }
    if (c === 'overflow-auto') { s.overflow = 'auto'; continue; }
    if (c === 'overflow-visible') { s.overflow = 'visible'; continue; }
    if (c === 'overflow-scroll') { s.overflow = 'auto'; continue; }

    // ── Shadow tokens ────────────────────────────────────────────
    if (c.startsWith('shadow-')) {
      const k = c.slice(7);
      const SHADOWS: Record<string, string> = {
        'hard-1': '-2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-2': '0px 3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-3': '2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-4': '0px -3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-5': '0px 2px 4px 0px rgba(38, 38, 38, 0.10)',
        'soft-1': '0px 1px 2px 0px rgba(0, 0, 0, 0.10)',
        'soft-2': '0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)',
        'soft-3': '0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10)',
        'soft-4': '0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -4px rgba(0, 0, 0, 0.10)',
        sm: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
        md: '0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10)',
        lg: '0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -4px rgba(0, 0, 0, 0.10)',
        xl: '0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 8px 10px -6px rgba(0, 0, 0, 0.10)',
        '2xl': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
        none: 'none',
      };
      if (SHADOWS[k]) { s.boxShadow = SHADOWS[k]; continue; }
      continue;
    }
    if (c === 'shadow') { s.boxShadow = '0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px -1px rgba(0, 0, 0, 0.10)'; continue; }

    // ── Width ────────────────────────────────────────────────────
    if (c === 'w-full') { s.width = '100%'; continue; }
    if (c === 'w-auto') { continue; /* HUG */ }
    if (c === 'w-px') { s.width = 1; continue; }
    if (c === 'w-fit') { continue; /* HUG */ }
    if (c === 'w-screen') { s.width = '100%'; continue; }
    if (c.startsWith('min-w-')) { s.minWidth = sp(c.slice(6)); continue; }
    if (c.startsWith('max-w-')) { s.maxWidth = sp(c.slice(6)); continue; }
    if (c.startsWith('w-')) {
      const k = c.slice(2);
      // Fractional: w-1/2, w-1/3, etc.
      if (k.includes('/')) {
        const [num, den] = k.split('/').map(Number);
        if (den) { s.width = Math.round((num / den) * 200); continue; } // 200px reference
      }
      s.width = sp(k); continue;
    }

    // ── Height ───────────────────────────────────────────────────
    if (c === 'h-full') { s.height = '100%'; continue; }
    if (c === 'h-fit' || c === 'h-auto') { continue; /* HUG */ }
    if (c === 'h-px') { s.height = 1; continue; }
    if (c === 'h-screen') { s.height = '100%'; continue; }
    if (c.startsWith('min-h-')) { s.minHeight = sp(c.slice(6)); continue; }
    if (c.startsWith('max-h-')) { s.maxHeight = sp(c.slice(6)); continue; }
    if (c.startsWith('h-')) {
      const k = c.slice(2);
      if (k.includes('/')) {
        const [num, den] = k.split('/').map(Number);
        if (den) { s.height = Math.round((num / den) * 100); continue; }
      }
      s.height = sp(k); continue;
    }

    // ── Aspect ratio ─────────────────────────────────────────────
    if (c.startsWith('aspect-')) {
      s.aspectRatio = c.slice(7);
      continue;
    }

    // ── Font family ──────────────────────────────────────────────
    if (c === 'font-sans') { s.fontFamily = 'Inter'; continue; }
    if (c === 'font-mono') { s.fontFamily = 'Source Code Pro'; continue; }
    if (c === 'font-serif') { s.fontFamily = 'Georgia'; continue; }

    // ── Font weight ─────────────────────────────────────────────
    if (c === 'font-thin') { s.fontWeight = '100'; continue; }
    if (c === 'font-extralight') { s.fontWeight = '200'; continue; }
    if (c === 'font-light') { s.fontWeight = '300'; continue; }
    if (c === 'font-normal') { s.fontWeight = '400'; continue; }
    if (c === 'font-medium') { s.fontWeight = '500'; continue; }
    if (c === 'font-semibold') { s.fontWeight = '600'; continue; }
    if (c === 'font-bold') { s.fontWeight = '700'; continue; }
    if (c === 'font-extrabold') { s.fontWeight = '800'; continue; }
    if (c === 'font-black') { s.fontWeight = '900'; continue; }

    // ── Opacity ──────────────────────────────────────────────────
    if (c.startsWith('opacity-')) { s.opacity = parseInt(c.slice(8)) / 100; continue; }

    // Silently skip: animate-*, cursor-*, select-*, pointer-*, appearance-*, etc.
  }
  return s;
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface FigmaNodeJSON {
  type: 'FRAME' | 'TEXT' | 'RECTANGLE' | 'ELLIPSE' | 'GROUP';
  name: string;
  styles: FigmaStyles;
  children?: FigmaNodeJSON[];
  /** For text nodes — the display text content */
  text?: string;
  /** Override name for the Figma layer (defaults to `name`) */
  layerName?: string;
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

  const variantLabel = Object.keys(props).length
    ? Object.entries(props).map(([k, v]) => `${k}=${v}`).join(', ')
    : 'default';

  // ── Pure-text root (Heading, Text) — render as TEXT node ────────────────
  if (entry.subParts.length === 0 && !entry.isContainer && isTextLike(entry.name)) {
    return {
      type: 'TEXT',
      name: SAMPLE_TEXT[entry.name] || variantLabel,
      styles: {
        color: parsedRoot.color ?? tok('foreground', mode),
        fontSize: parsedRoot.fontSize ?? 16,
        fontWeight: parsedRoot.fontWeight ?? '400',
        fontFamily: parsedRoot.fontFamily ?? 'Inter',
        lineHeight: parsedRoot.lineHeight,
        letterSpacing: parsedRoot.letterSpacing,
        textAlign: parsedRoot.textAlign,
      },
      text: SAMPLE_TEXT[entry.name] || variantLabel,
    };
  }

  // ── Switch — needs implicit thumb ────────────────────────────────────────
  if (entry.name === 'Switch') {
    const isChecked = props.isChecked === 'true';
    return {
      type: 'FRAME',
      name: variantLabel,
      styles: { ...parsedRoot },
      children: [
        {
          type: 'ELLIPSE',
          name: 'SwitchThumb',
          styles: {
            width: parsedRoot.height ? Number(parsedRoot.height) - 4 : 8,
            height: parsedRoot.height ? Number(parsedRoot.height) - 4 : 8,
            backgroundColor: isChecked ? tok('primary-foreground', mode) : tok('foreground', mode),
            borderRadius: 9999,
          },
        },
      ],
    };
  }

  // ── Spinner — render as ELLIPSE ──────────────────────────────────────────
  if (entry.name === 'Spinner') {
    return {
      type: 'ELLIPSE',
      name: variantLabel,
      styles: { ...parsedRoot },
    };
  }

  // ── Single shape root (Divider, Skeleton) ───────────────────────────────
  if (entry.subParts.length === 0 && !entry.isContainer && !isTextLike(entry.name)) {
    const isEllipse = !!(parsedRoot.borderRadius && parsedRoot.borderRadius > 50);
    return {
      type: isEllipse ? 'ELLIPSE' : 'RECTANGLE',
      name: variantLabel,
      styles: { ...parsedRoot },
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
          color: subParsed.color ?? parsedRoot.color ?? tok('foreground', mode),
          fontSize: subParsed.fontSize ?? parsedRoot.fontSize ?? 14,
          fontFamily: subParsed.fontFamily ?? parsedRoot.fontFamily ?? 'Inter',
          fontWeight: subParsed.fontWeight ?? parsedRoot.fontWeight ?? '400',
          lineHeight: subParsed.lineHeight ?? parsedRoot.lineHeight,
          letterSpacing: subParsed.letterSpacing ?? parsedRoot.letterSpacing,
          textAlign: subParsed.textAlign ?? parsedRoot.textAlign,
          ...subParsed,
        },
        text: sampleText,
      };
    }

    // ── CheckboxIndicator — add implicit check mark ──────────────────────
    if (sub.name === 'CheckboxIndicator') {
      const isChecked = props.isChecked === 'true';
      const indicatorChildren: FigmaNodeJSON[] = [];
      if (isChecked) {
        // Checkmark using a small rectangle rotated (we'll handle rotation in code.ts)
        indicatorChildren.push({
          type: 'RECTANGLE',
          name: 'CheckIcon',
          styles: {
            width: 6,
            height: 6,
            backgroundColor: tok('primary', mode),
            borderRadius: 1,
          },
        });
      }
      return {
        type: 'FRAME' as const,
        name: sub.name,
        styles: { ...subParsed },
        children: indicatorChildren,
      };
    }

    // ── RadioIndicator — add implicit dot ────────────────────────────────
    if (sub.name === 'RadioIndicator') {
      const isChecked = props.isChecked === 'true';
      const indicatorChildren: FigmaNodeJSON[] = [];
      if (isChecked) {
        indicatorChildren.push({
          type: 'ELLIPSE',
          name: 'RadioDot',
          styles: {
            width: 6,
            height: 6,
            backgroundColor: tok('primary', mode),
            borderRadius: 9999,
          },
        });
      }
      return {
        type: 'FRAME' as const,
        name: sub.name,
        styles: { ...subParsed },
        children: indicatorChildren,
      };
    }

    // ── SliderTrack — add nested filled track + thumb ────────────────────
    if (sub.name === 'SliderTrack') {
      const trackChildren: FigmaNodeJSON[] = [];
      // Filled portion
      if (spc?.['SliderFilledTrack']) {
        const filledParsed = parseClasses(spc['SliderFilledTrack'], mode);
        trackChildren.push({
          type: 'RECTANGLE',
          name: 'SliderFilledTrack',
          styles: {
            ...filledParsed,
            width: '50%',
          },
        });
      }
      // Thumb
      if (spc?.['SliderThumb']) {
        const thumbParsed = parseClasses(spc['SliderThumb'], mode);
        trackChildren.push({
          type: 'ELLIPSE',
          name: 'SliderThumb',
          styles: {
            ...thumbParsed,
            position: 'absolute',
          },
        });
      }
      return {
        type: 'FRAME' as const,
        name: sub.name,
        styles: { ...subParsed },
        children: trackChildren,
      };
    }

    // ── ProgressFilledTrack — proportional fill ──────────────────────────
    if (sub.name === 'ProgressFilledTrack') {
      return {
        type: 'RECTANGLE' as const,
        name: sub.name,
        styles: { ...subParsed, width: '50%' },
      };
    }

    // ── SelectTrigger — add implicit chevron ─────────────────────────────
    if (sub.name === 'SelectTrigger') {
      return {
        type: 'FRAME' as const,
        name: sub.name,
        styles: { ...subParsed },
        children: [
          ...(spc?.['SelectInput'] ? [{
            type: 'TEXT' as const,
            name: 'SelectInput',
            text: 'Select...',
            styles: {
              ...parseClasses(spc['SelectInput'], mode),
              color: parseClasses(spc['SelectInput'], mode).color ?? tok('foreground', mode),
              fontSize: parseClasses(spc['SelectInput'], mode).fontSize ?? 14,
              fontFamily: 'Inter',
              fontWeight: '400',
            },
          }] : []),
          {
            type: 'FRAME',
            name: 'SelectChevron',
            styles: {
              width: 16,
              height: 16,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            },
            children: [
              {
                type: 'TEXT',
                name: 'ChevronIcon',
                text: '▾',
                styles: {
                  fontSize: 12,
                  color: tok('muted-foreground', mode),
                  fontWeight: '400',
                  fontFamily: 'Inter',
                },
              },
            ],
          },
        ],
      };
    }

    if (isShapePart(sub.name)) {
      const isEllipse = !!(subParsed.borderRadius && subParsed.borderRadius > 50);
      return {
        type: (isEllipse ? 'ELLIPSE' : 'RECTANGLE') as 'ELLIPSE' | 'RECTANGLE',
        name: sub.name,
        styles: { ...subParsed },
      };
    }

    // Container sub-parts (ModalHeader, TabsList, etc.)
    return {
      type: 'FRAME' as const,
      name: sub.name,
      styles: { ...subParsed },
    };
  });

  return { type: 'FRAME', name: variantLabel, styles: { ...parsedRoot }, children };
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
